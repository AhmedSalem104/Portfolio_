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
    email: '',
    message: ''
  };

  isSubmitting = false;
  formspreeUrl = 'https://formspree.io/f/mgvzqkok';

  // Notification state
  notification = {
    show: false,
    type: 'success' as 'success' | 'error',
    message: ''
  };

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      const response = await fetch(this.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.formData.email,
          message: this.formData.message
        })
      });

      if (response.ok) {
        this.showNotification('success', 'Thank you for reaching out! I appreciate your visit to my portfolio and will get back to you soon.');
        // Reset form
        this.formData = { email: '', message: '' };
      } else {
        throw new Error('Form submission failed');
      }
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
