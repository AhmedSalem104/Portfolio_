import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[60]">
      <div
        class="h-full bg-primary transition-[width] duration-150 ease-out"
        [style.width.%]="progress">
      </div>
    </div>
  `,
})
export class ScrollProgressComponent {
  @Input() progress = 0;
}
