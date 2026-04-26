import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="fixed top-0 left-0 w-full h-1 bg-background-card/40 z-[60] backdrop-blur-sm">
      <div
        class="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-glow transition-[width] duration-150 ease-out"
        [style.width.%]="progress">
      </div>
    </div>
  `,
})
export class ScrollProgressComponent {
  progress = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  }
}
