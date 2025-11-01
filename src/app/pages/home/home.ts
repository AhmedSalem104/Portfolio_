import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  typedText: string = '';
  private fullText: string = '.NET & Angular Specialist';
  private typingSpeed: number = 100; // milliseconds
  private deletingSpeed: number = 50;
  private pauseTime: number = 2000; // pause before deleting
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
      if (!isDeleting && index <= this.fullText.length) {
        this.typedText = this.fullText.substring(0, index);
        index++;
        this.typingInterval = setTimeout(type, this.typingSpeed);
      } else if (!isDeleting && index > this.fullText.length) {
        // Pause before deleting
        this.typingInterval = setTimeout(() => {
          isDeleting = true;
          type();
        }, this.pauseTime);
      } else if (isDeleting && index > 0) {
        this.typedText = this.fullText.substring(0, index - 1);
        index--;
        this.typingInterval = setTimeout(type, this.deletingSpeed);
      } else if (isDeleting && index === 0) {
        // Start typing again
        isDeleting = false;
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
