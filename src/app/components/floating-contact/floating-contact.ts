import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-3">
      <!-- Expanded Options -->
      <div *ngIf="isOpen" class="flex flex-col gap-3 animate-slide-up-fade">
        <a href="https://wa.me/201015819700" target="_blank" rel="noopener noreferrer"
           class="group flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-lg transition-all duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="font-cairo font-semibold text-sm whitespace-nowrap">WhatsApp</span>
        </a>

        <a href="mailto:Ahmedsalem1041998@gmail.com"
           class="group flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-lg transition-all duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span class="font-cairo font-semibold text-sm whitespace-nowrap">Email</span>
        </a>

        <a href="tel:+201015819700"
           class="group flex items-center gap-3 bg-gradient-to-r from-accent to-success text-white px-4 py-3 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-lg transition-all duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span class="font-cairo font-semibold text-sm whitespace-nowrap">Call</span>
        </a>
      </div>

      <!-- Toggle Button -->
      <button (click)="toggle()"
              [attr.aria-label]="isOpen ? 'Close contact menu' : 'Open contact menu'"
              class="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-110 transition-all duration-300 relative">
        <span *ngIf="!isOpen" class="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping"></span>
        <svg *ngIf="!isOpen" class="w-6 h-6 text-white relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <svg *ngIf="isOpen" class="w-6 h-6 text-white relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    @keyframes slide-up-fade {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-up-fade > * {
      animation: slide-up-fade 0.3s ease-out forwards;
      opacity: 0;
    }
    .animate-slide-up-fade > *:nth-child(1) { animation-delay: 0ms; }
    .animate-slide-up-fade > *:nth-child(2) { animation-delay: 70ms; }
    .animate-slide-up-fade > *:nth-child(3) { animation-delay: 140ms; }
  `],
})
export class FloatingContactComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
