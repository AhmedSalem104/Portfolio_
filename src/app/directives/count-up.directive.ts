import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') target = 0;
  @Input() duration = 2000;
  @Input() suffix = '';

  private observer?: IntersectionObserver;
  private hasAnimated = false;
  private rafId?: number;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.el.nativeElement.textContent = '0' + this.suffix;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private animate() {
    const start = performance.now();
    const target = this.target;
    const duration = this.duration;
    const suffix = this.suffix;
    const el = this.el.nativeElement;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };

    this.rafId = requestAnimationFrame(step);
  }
}
