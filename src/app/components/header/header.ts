import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  activeSection = 'home';
  @Input() isScrolled = false;

  private sectionObserver?: IntersectionObserver;

  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Profile' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
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

      this.activeSection = sectionId;
      this.isMenuOpen = false;
    }
  }

  ngAfterViewInit() {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) this.activeSection = visible.target.id;
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.5] }
    );

    document.querySelectorAll<HTMLElement>('main > section[id]').forEach((section) =>
      this.sectionObserver?.observe(section)
    );
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }
}
