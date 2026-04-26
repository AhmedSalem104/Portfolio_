import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      *ngIf="isVisible"
      (click)="scrollToTop()"
      aria-label="Back to top"
      class="fixed bottom-8 right-8 z-50 group">
      <div class="relative w-14 h-14">
        <!-- Progress Ring -->
        <svg class="absolute inset-0 w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="24" stroke="rgba(99, 102, 241, 0.2)" stroke-width="3" fill="none"></circle>
          <circle
            cx="28" cy="28" r="24"
            stroke="url(#btt-gradient)"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
            class="transition-all duration-150"
            [style.stroke-dasharray]="150.8"
            [style.stroke-dashoffset]="150.8 - (150.8 * progress / 100)">
          </circle>
          <defs>
            <linearGradient id="btt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6366f1"></stop>
              <stop offset="100%" stop-color="#22d3ee"></stop>
            </linearGradient>
          </defs>
        </svg>
        <!-- Button Inner -->
        <div class="absolute inset-1 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow group-hover:shadow-glow-lg group-hover:scale-110 transition-all duration-300">
          <svg class="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </div>
      </div>
    </button>
  `,
})
export class BackToTopComponent {
  isVisible = false;
  progress = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    this.isVisible = scrollTop > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
