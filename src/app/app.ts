import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { SkillsComponent } from './pages/skills/skills';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { FloatingContactComponent } from './components/floating-contact/floating-contact';

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
    FloatingContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  scrollProgress = 0;
  isScrolled = false;
  showBackToTop = false;

  private animationFrameId?: number;

  constructor(private readonly zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.updateScrollState();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  private readonly handleScroll = () => {
    if (this.animationFrameId) return;
    this.animationFrameId = requestAnimationFrame(() => this.updateScrollState());
  };

  private updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    this.zone.run(() => {
      this.scrollProgress = progress;
      this.isScrolled = scrollTop > 24;
      this.showBackToTop = scrollTop > 500;
      this.animationFrameId = undefined;
    });
  }
}
