import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-6 left-5 z-40 flex items-end gap-2 md:left-8">
      <div *ngIf="isOpen" id="quick-contact-menu"
           class="mb-14 flex w-44 flex-col overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-card">
        <a href="https://wa.me/201015819700" target="_blank" rel="noopener noreferrer"
           class="rounded-xl px-3 py-2.5 text-xs font-semibold text-text-secondary transition hover:bg-slate-50 hover:text-primary">WhatsApp <span class="float-right">↗</span></a>
        <a href="mailto:ahmedsalem1041998@gmail.com"
           class="rounded-xl px-3 py-2.5 text-xs font-semibold text-text-secondary transition hover:bg-slate-50 hover:text-primary">Email <span class="float-right">↗</span></a>
        <a href="tel:+201015819700"
           class="rounded-xl px-3 py-2.5 text-xs font-semibold text-text-secondary transition hover:bg-slate-50 hover:text-primary">Call <span class="float-right">↗</span></a>
      </div>

      <button type="button" (click)="toggle()" [attr.aria-expanded]="isOpen" aria-controls="quick-contact-menu"
              [attr.aria-label]="isOpen ? 'Close quick contact menu' : 'Open quick contact menu'"
              class="absolute bottom-0 left-0 inline-flex min-h-12 items-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-primary px-4 text-xs font-semibold text-white shadow-float transition hover:-translate-y-1">
        <span class="grid h-6 w-6 place-items-center rounded-lg bg-white/15" aria-hidden="true">{{ isOpen ? '×' : '✦' }}</span>
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
