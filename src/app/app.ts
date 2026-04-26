import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { SkillsComponent } from './pages/skills/skills';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { PageLoaderComponent } from './components/page-loader/page-loader';
import { FloatingContactComponent } from './components/floating-contact/floating-contact';

declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ScrollProgressComponent,
    BackToTopComponent,
    PageLoaderComponent,
    FloatingContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 120,
        delay: 0,
        anchorPlacement: 'top-bottom',
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
