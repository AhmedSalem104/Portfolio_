import { Component } from '@angular/core';
import { TranslatePipe } from '../../site-preferences';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  scrollToSection(sectionId: string) {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    document.getElementById(sectionId)?.scrollIntoView({ behavior });
  }
}
