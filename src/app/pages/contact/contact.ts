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
    email: '',
    message: ''
  };

  isSubmitting = false;

  // Notification state
  notification = {
    show: false,
    type: 'success' as 'success' | 'error',
    message: ''
  };

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_email: this.formData.email,
          message: this.formData.message,
          to_email: 'ahmedsalem1041998@gmail.com'
        }
      );

      this.showNotification('success', 'Thank you for reaching out! I appreciate your visit to my portfolio and will get back to you soon.');
      this.formData = { email: '', message: '' };
    } catch (error) {
      console.error('Failed to send message:', error);
      this.showNotification('error', 'Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      this.isSubmitting = false;
    }
  }

  showNotification(type: 'success' | 'error', message: string) {
    this.notification = {
      show: true,
      type,
      message
    };

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.notification.show = false;
    }, 5000);
  }

  closeNotification() {
    this.notification.show = false;
  }
}
