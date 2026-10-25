import { Component } from '@angular/core';
import { CountUpDirective } from '../../directives/count-up.directive';
import { TranslatePipe } from '../../site-preferences';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CountUpDirective, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {}
