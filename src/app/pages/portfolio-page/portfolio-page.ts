import { Component } from '@angular/core';
import { AboutComponent } from '../about/about';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-portfolio-page',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {

}
