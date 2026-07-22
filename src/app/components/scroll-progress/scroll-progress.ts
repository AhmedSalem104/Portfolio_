import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        class="h-full rounded-r-full bg-gradient-primary transition-[width] duration-150 ease-out"
        [style.width.%]="progress">
      </div>
    </div>
  `,
})
export class ScrollProgressComponent {
  @Input() progress = 0;
}
