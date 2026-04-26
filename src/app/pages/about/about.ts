import { Component } from '@angular/core';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {}
