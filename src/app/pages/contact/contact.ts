import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
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
    showFallback: false,
  };

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      await emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, {
        from_name: this.formData.name || 'Portfolio Visitor',
        from_email: this.formData.email,
        message: this.formData.message,
        to_email: 'ahmedsalem1041998@gmail.com',
        reply_to: this.formData.email,
      });

      this.showNotification(
        'success',
        'Message Sent Successfully!',
        'Thank you for reaching out! I appreciate your visit and will get back to you soon.'
      );
      this.formData = { name: '', email: '', message: '' };
    } catch (error: any) {
      console.error('EmailJS error:', error);

      const status = error?.status;
      let title = 'Could not send via the form';
      let message =
        'Something went wrong. You can use the button below to open your email client directly.';

      if (status === 403 || status === 401) {
        message = 'The email service key is invalid or has been revoked. Please email me directly.';
      } else if (status === 404) {
        message = 'The email template was not found. Please email me directly.';
      } else if (status === 429 || status === 426) {
        message = 'Monthly email quota exceeded. Please email me directly.';
      } else if (!navigator.onLine) {
        title = 'You appear to be offline';
        message = 'Please check your internet connection and try again.';
      }

      this.showNotification('error', title, message, true);
    } finally {
      this.isSubmitting = false;
    }
  }

  openMailClient() {
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${this.formData.name || ''}\n` +
        `Email: ${this.formData.email || ''}\n\n` +
        `${this.formData.message || ''}`
    );
    window.location.href = `mailto:ahmedsalem1041998@gmail.com?subject=${subject}&body=${body}`;
  }

  showNotification(
    type: 'success' | 'error',
    title: string,
    message: string,
    showFallback = false
  ) {
    this.notification = { show: true, type, title, message, showFallback };

    setTimeout(() => {
      this.notification.show = false;
    }, 8000);
  }

  closeNotification() {
    this.notification.show = false;
  }
}
