import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  delay: number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce platform with product management, shopping cart, and order processing.',
      technologies: ['Angular', '.NET Core', 'SQL Server'],
      demo: '#',
      delay: 0
    },
    {
      title: 'Quiz App',
      description: 'An interactive quiz application with dynamic questions, scoring system, and user authentication.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      demo: '#',
      delay: 100
    },
    {
      title: 'Social Network App',
      description: 'A modern social networking platform with posts, comments, likes, and real-time updates.',
      technologies: ['Angular', '.NET Core', 'SignalR'],
      demo: '#',
      delay: 200
    },
    {
      title: 'Voltyks EV Charging API',
      description: 'Enterprise-grade API platform for Electric Vehicle charging management. Features geolocation-based charger discovery, real-time charging requests, payment integration with card tokenization, wallet system, JWT + OAuth authentication, push notifications, and comprehensive admin controls. (Proprietary - Source code is private)',
      technologies: ['.NET 8', 'C# 12', 'Entity Framework Core', 'Azure SQL', 'Redis', 'JWT', 'OAuth 2.0', 'Firebase FCM', 'Azure', 'Clean Architecture'],
      delay: 300
    },
    {
      title: 'Voltyks Admin Dashboard',
      description: 'Modern admin dashboard for the Voltyks EV charging platform. Built with Angular 20 featuring standalone components, signal-based reactivity, real-time analytics with Chart.js, user/charger/vehicle management, transaction tracking, RTL Arabic support, and dark theme. (Proprietary - Source code is private)',
      technologies: ['Angular 20', 'TypeScript 5.9', 'RxJS', 'SCSS', 'Chart.js', 'Angular Material'],
      delay: 350
    },
    {
      title: 'Shopping Online Website',
      description: 'Full-featured online shopping platform with product catalog and payment integration.',
      technologies: ['ASP.NET MVC', 'SQL Server', 'Bootstrap'],
      delay: 400
    },
    {
      title: 'Diet To Door Platform',
      description: 'Meal planning and delivery platform with nutritional tracking and subscription management.',
      technologies: ['Angular', '.NET Core', 'SQL Server'],
      delay: 450
    }
  ];
}
