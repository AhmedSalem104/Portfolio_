import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-6 left-5 z-40 flex items-end gap-2 md:left-8">
      <div *ngIf="isOpen" id="quick-contact-menu" class="flex flex-col border border-text-primary bg-background-card shadow-card">
        <a href="https://wa.me/201015819700" target="_blank" rel="noopener noreferrer"
           class="border-b border-border px-4 py-3 font-tajawal text-[10px] font-semibold uppercase tracking-wider text-text-primary hover:bg-background-elevated">
          WhatsApp ↗
        </a>
        <a href="mailto:ahmedsalem1041998@gmail.com"
           class="border-b border-border px-4 py-3 font-tajawal text-[10px] font-semibold uppercase tracking-wider text-text-primary hover:bg-background-elevated">
          Email ↗
        </a>
        <a href="tel:+201015819700"
           class="px-4 py-3 font-tajawal text-[10px] font-semibold uppercase tracking-wider text-text-primary hover:bg-background-elevated">
          Call ↗
        </a>
      </div>

      <button type="button" (click)="toggle()" [attr.aria-expanded]="isOpen" aria-controls="quick-contact-menu"
              [attr.aria-label]="isOpen ? 'Close quick contact menu' : 'Open quick contact menu'"
              class="min-h-12 border border-text-primary bg-primary px-4 font-tajawal text-[10px] font-semibold uppercase tracking-wider text-white shadow-[4px_4px_0_#e9673f] transition-transform hover:-translate-y-1">
        {{ isOpen ? 'Close' : 'Let’s talk' }}
      </button>
    </div>
  `,
})
export class FloatingContactComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
