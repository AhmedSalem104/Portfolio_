import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Renders the real statistic immediately.
 *
 * Keeping the value stable is intentional: portfolio audits, screen readers,
 * crawlers, reduced-motion users and slow devices must never observe a temporary zero.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') target = 0;
  @Input() suffix = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const value = `${this.target}${this.suffix}`;
    this.el.nativeElement.textContent = value;
    this.el.nativeElement.setAttribute('aria-label', value);
  }
}
