import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isLoading"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700"
      [class.opacity-0]="isFadingOut"
      [class.pointer-events-none]="isFadingOut">
      <div class="relative flex flex-col items-center">
        <!-- Animated Logo -->
        <div class="relative w-24 h-24 mb-6">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent animate-pulse-slow"></div>
          <div class="absolute inset-0 rounded-2xl border-2 border-primary/40 animate-ping"></div>
          <div class="absolute inset-2 bg-background-card rounded-xl flex items-center justify-center">
            <span class="text-4xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent font-cairo">A</span>
          </div>
        </div>

        <!-- Name -->
        <h2 class="text-xl font-bold text-text-primary font-cairo mb-1">Ahmed Salem</h2>
        <p class="text-xs text-text-muted font-cairo tracking-widest uppercase mb-6">Senior Full-Stack Engineer</p>

        <!-- Progress Bar -->
        <div class="w-48 h-1 bg-background-elevated rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-loader-bar"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes loader-bar {
      0% { transform: translateX(-100%); width: 30%; }
      50% { width: 60%; }
      100% { transform: translateX(400%); width: 30%; }
    }
    .animate-loader-bar {
      animation: loader-bar 1.4s ease-in-out infinite;
    }
  `],
})
export class PageLoaderComponent implements OnInit {
  isLoading = true;
  isFadingOut = false;

  ngOnInit() {
    setTimeout(() => {
      this.isFadingOut = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 700);
    }, 1100);
  }
}
