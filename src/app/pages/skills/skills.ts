import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML5', level: 95, color: '#E44D26', icon: 'html' },
    { name: 'CSS3', level: 90, color: '#264DE4', icon: 'css' },
    { name: 'JavaScript', level: 88, color: '#F7DF1E', icon: 'js' },
    { name: 'TypeScript', level: 85, color: '#3178C6', icon: 'ts' },
    { name: 'Angular', level: 90, color: '#DD0031', icon: 'angular' },
    { name: 'jQuery', level: 80, color: '#0769AD', icon: 'jquery' },
    { name: 'Bootstrap', level: 85, color: '#7952B3', icon: 'bootstrap' },
    { name: 'Tailwind CSS', level: 88, color: '#06B6D4', icon: 'tailwind' }
  ];

  backendSkills = [
    { name: 'C#', level: 90, color: '#239120', icon: 'csharp' },
    { name: '.NET Core', level: 88, color: '#512BD4', icon: 'dotnet' },
    { name: 'ASP.NET MVC', level: 85, color: '#0078D4', icon: 'aspnet' },
    { name: 'SQL Server', level: 85, color: '#CC2927', icon: 'sql' },
    { name: 'Entity Framework', level: 82, color: '#512BD4', icon: 'ef' }
  ];

  tools = [
    { name: 'Visual Studio', icon: 'vs', color: '#5C2D91' },
    { name: 'VS Code', icon: 'vscode', color: '#007ACC' },
    { name: 'GitHub', icon: 'github', color: '#181717' },
    { name: 'Git', icon: 'git', color: '#F05032' },
    { name: 'Agile', icon: 'agile', color: '#0052CC' },
    { name: 'OOP', icon: 'oop', color: '#00C48C' },
    { name: 'SOLID', icon: 'solid', color: '#009688' },
    { name: 'Design Patterns', icon: 'pattern', color: '#FF6B6B' },
    { name: 'Debugging', icon: 'debug', color: '#4CAF50' },
    { name: 'Testing', icon: 'test', color: '#FF9800' },
    { name: 'REST APIs', icon: 'api', color: '#00BCD4' },
    { name: 'Clean Architecture', icon: 'arch', color: '#9C27B0' }
  ];

  // Skill categories for better organization
  skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: this.frontendSkills
    },
    {
      title: 'Backend Development',
      icon: 'backend',
      color: 'from-purple-500 to-pink-500',
      skills: this.backendSkills
    }
  ];
}
