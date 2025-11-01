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
      description: 'Electric Vehicle Charging Management System with Clean Architecture and JWT authentication.',
      technologies: ['.NET Core', 'EF Core', 'Clean Architecture', 'JWT'],
      github: 'https://github.com/AhmedSalem104',
      delay: 300
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
      delay: 500
    }
  ];
}
