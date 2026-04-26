import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type FormState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  state: FormState = 'idle';
  errorMessage = '';

  notification = {
    show: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: '',
  };

  private readonly recipient = 'Ahmedsalem1041998@gmail.com';
  private readonly endpoint = `https://formsubmit.co/ajax/${this.recipient}`;
  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  get isEmailValid(): boolean {
    if (!this.formData.email) return false;
    return this.emailRegex.test(this.formData.email);
  }

  get isFormValid(): boolean {
    return this.isEmailValid && this.formData.message.trim().length >= 5;
  }

  get messageCharCount(): number {
    return this.formData.message.length;
  }

  async onSubmit() {
    if (this.state === 'sending' || !this.isFormValid) return;

    this.state = 'sending';
    this.errorMessage = '';

    const senderName = this.formData.name?.trim() || 'Portfolio Visitor';
    const senderEmail = this.formData.email.trim();
    const userMessage = this.formData.message.trim();

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: userMessage,
          _subject: `Portfolio Contact - ${senderName}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: senderEmail,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true)) {
        this.state = 'success';
        this.showNotification(
          'success',
          'Message Sent Successfully!',
          'Thank you for reaching out. I will get back to you within 24 hours.'
        );
        this.formData = { name: '', email: '', message: '' };

        setTimeout(() => {
          if (this.state === 'success') this.state = 'idle';
        }, 4000);
      } else {
        throw new Error(data.message || 'Send failed');
      }
    } catch (error) {
      console.error('Form send error:', error);
      this.state = 'error';
      this.errorMessage = navigator.onLine
        ? 'Could not send right now. Opening your email client as a backup...'
        : 'You appear to be offline. Opening your email client as a backup...';

      setTimeout(() => this.openMailFallback(), 1500);
      setTimeout(() => {
        this.state = 'idle';
        this.errorMessage = '';
      }, 6000);
    }
  }

  private openMailFallback() {
    const senderName = this.formData.name?.trim() || 'Portfolio Visitor';
    const senderEmail = this.formData.email?.trim() || '';
    const subject = `Portfolio Contact - ${senderName}`;
    const body =
      `Hi Ahmed,\n\n${this.formData.message.trim()}\n\n---\nName: ${senderName}\nEmail: ${senderEmail}`;
    window.location.href = `mailto:${this.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  copyEmail() {
    navigator.clipboard
      .writeText(this.recipient)
      .then(() =>
        this.showNotification(
          'success',
          'Email Copied',
          `${this.recipient} copied to your clipboard.`
        )
      )
      .catch(() =>
        this.showNotification(
          'error',
          'Copy Failed',
          'Unable to access clipboard. Please copy the email manually.'
        )
      );
  }

  showNotification(type: 'success' | 'error', title: string, message: string) {
    this.notification = { show: true, type, title, message };
    setTimeout(() => (this.notification.show = false), 6000);
  }

  closeNotification() {
    this.notification.show = false;
  }
}
