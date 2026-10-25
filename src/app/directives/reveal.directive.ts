import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const host = this.element.nativeElement;
    host.classList.add('reveal-pending');
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      host.classList.add('is-revealed');
      this.observer?.disconnect();
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
