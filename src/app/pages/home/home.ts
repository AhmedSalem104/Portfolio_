import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  typedText: string = '';
  private titles: string[] = [
    'Senior Full-Stack Developer',
    '.NET 8 & ASP.NET Core Specialist',
    'Angular 17 - 21 Expert',
    'Clean Architecture & CQRS',
    'SignalR & Redis Real-Time',
    'Microsoft Azure Engineer'
  ];
  private currentTitleIndex: number = 0;
  private typingSpeed: number = 80;
  private deletingSpeed: number = 40;
  private pauseTime: number = 1800;
  private typingInterval: any;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingEffect() {
    let index = 0;
    let isDeleting = false;

    const type = () => {
      const fullText = this.titles[this.currentTitleIndex];

      if (!isDeleting && index <= fullText.length) {
        this.typedText = fullText.substring(0, index);
        index++;
        this.typingInterval = setTimeout(type, this.typingSpeed);
      } else if (!isDeleting && index > fullText.length) {
        this.typingInterval = setTimeout(() => {
          isDeleting = true;
          type();
        }, this.pauseTime);
      } else if (isDeleting && index > 0) {
        this.typedText = fullText.substring(0, index - 1);
        index--;
        this.typingInterval = setTimeout(type, this.deletingSpeed);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        this.typingInterval = setTimeout(type, this.typingSpeed);
      }
    };

    type();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
