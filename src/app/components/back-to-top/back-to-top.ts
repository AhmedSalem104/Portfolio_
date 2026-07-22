import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      *ngIf="isVisible"
      type="button"
      (click)="scrollToTop()"
      aria-label="Back to top"
      class="fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center border border-text-primary bg-background-card font-tajawal text-sm font-semibold text-text-primary shadow-card transition-transform hover:-translate-y-1 md:right-8">
      <span aria-hidden="true">↑</span>
      <span class="absolute bottom-0 left-0 h-1 bg-secondary" [style.width.%]="progress"></span>
    </button>
  `,
})
export class BackToTopComponent {
  @Input() isVisible = false;
  @Input() progress = 0;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
