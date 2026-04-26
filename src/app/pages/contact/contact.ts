import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  isSubmitting = false;

  notification = {
    show: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: '',
  };

  private readonly recipient = 'ahmedsalem1041998@gmail.com';

  onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const senderName = this.formData.name?.trim() || 'Portfolio Visitor';
    const senderEmail = this.formData.email?.trim();
    const userMessage = this.formData.message?.trim() || '';

    const subject = `Portfolio Contact — ${senderName}`;
    const body =
      `Hi Ahmed,\n\n` +
      `${userMessage}\n\n` +
      `---\n` +
      `Name: ${senderName}\n` +
      `Email: ${senderEmail}\n` +
      `Sent from: ahmedsalem-portfolio.vercel.app`;

    const mailtoUrl =
      `mailto:${this.recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      this.showNotification(
        'success',
        'Email Client Opened',
        'Your default email app is opening with your message ready to send. Just click Send to deliver it.'
      );
      this.isSubmitting = false;
    }, 600);
  }

  copyEmail() {
    navigator.clipboard
      .writeText(this.recipient)
      .then(() => {
        this.showNotification(
          'success',
          'Email Copied',
          `${this.recipient} copied to your clipboard.`
        );
      })
      .catch(() => {
        this.showNotification(
          'error',
          'Copy Failed',
          'Unable to access clipboard. Please copy the email manually.'
        );
      });
  }

  showNotification(type: 'success' | 'error', title: string, message: string) {
    this.notification = { show: true, type, title, message };
    setTimeout(() => {
      this.notification.show = false;
    }, 6000);
  }

  closeNotification() {
    this.notification.show = false;
  }
}
