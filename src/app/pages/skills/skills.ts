import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  gradient: string;
  iconPath: string;
  skills: Skill[];
}

interface TechItem {
  name: string;
  color: string;
}

interface TechCategory {
  title: string;
  icon: string;
  gradient: string;
  items: TechItem[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  // Core Skills with proficiency levels (Frontend & Backend)
  frontendSkills: Skill[] = [
    { name: 'Angular 17 - 21', level: 95, color: '#DD0031' },
    { name: 'TypeScript', level: 92, color: '#3178C6' },
    { name: 'JavaScript ES6+', level: 92, color: '#F7DF1E' },
    { name: 'RxJS', level: 88, color: '#B7178C' },
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
    { name: 'HTML5', level: 96, color: '#E44D26' },
    { name: 'CSS3 / SCSS', level: 92, color: '#264DE4' },
    { name: 'PrimeNG', level: 85, color: '#3B82F6' },
  ];

  backendSkills: Skill[] = [
    { name: 'C# / .NET 8', level: 95, color: '#512BD4' },
    { name: 'ASP.NET Core', level: 93, color: '#5C2D91' },
    { name: 'EF Core 8', level: 92, color: '#68217A' },
    { name: 'Dapper', level: 85, color: '#FF6B35' },
    { name: 'SQL Server / T-SQL', level: 92, color: '#CC2927' },
    { name: 'REST API Design', level: 95, color: '#00BCD4' },
    { name: 'SignalR', level: 90, color: '#9333EA' },
    { name: 'Redis', level: 88, color: '#DC382D' },
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      subtitle: 'Modern Angular & TypeScript ecosystem',
      gradient: 'from-primary to-accent',
      iconPath: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      skills: this.frontendSkills,
    },
    {
      title: 'Backend Development',
      subtitle: '.NET 8, Clean Architecture & databases',
      gradient: 'from-secondary to-primary',
      iconPath: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z',
      skills: this.backendSkills,
    },
  ];

  // Detailed Tech Categories (full CV breakdown)
  techCategories: TechCategory[] = [
    {
      title: 'Backend (.NET) Stack',
      icon: 'backend',
      gradient: 'from-purple-500 to-violet-600',
      items: [
        { name: '.NET 8', color: '#512BD4' },
        { name: 'ASP.NET Core Web API', color: '#5C2D91' },
        { name: 'ASP.NET MVC', color: '#0078D4' },
        { name: 'Razor Pages', color: '#68217A' },
        { name: 'Minimal APIs', color: '#7B1FA2' },
        { name: 'EF Core 8', color: '#68217A' },
        { name: 'EF Core Migrations', color: '#9333EA' },
        { name: 'EF Core Interceptors', color: '#A855F7' },
        { name: 'Dapper', color: '#FF6B35' },
        { name: 'LINQ', color: '#512BD4' },
        { name: 'AutoMapper', color: '#FF9800' },
        { name: 'FluentValidation', color: '#10B981' },
        { name: 'Asp.Versioning', color: '#0EA5E9' },
        { name: 'Swagger / OpenAPI', color: '#85EA2D' },
        { name: 'BCrypt.Net', color: '#EF4444' },
        { name: 'Background Services', color: '#8B5CF6' },
        { name: 'Hosted Services', color: '#7C3AED' },
        { name: 'Custom Middleware', color: '#6366F1' },
        { name: 'Dependency Injection', color: '#3B82F6' },
      ],
    },
    {
      title: 'Frontend (Angular) Stack',
      icon: 'angular',
      gradient: 'from-red-500 to-pink-600',
      items: [
        { name: 'Angular 17 - 21', color: '#DD0031' },
        { name: 'Angular CLI', color: '#DD0031' },
        { name: 'Angular CDK', color: '#E91E63' },
        { name: 'Angular Material', color: '#3F51B5' },
        { name: 'Standalone Components', color: '#F44336' },
        { name: 'Angular Signals', color: '#FF1744' },
        { name: 'Angular SSR', color: '#D32F2F' },
        { name: 'RxJS 7.8', color: '#B7178C' },
        { name: 'Reactive Forms', color: '#C2185B' },
        { name: 'Route Guards', color: '#9C27B0' },
        { name: 'HTTP Interceptors', color: '#673AB7' },
        { name: 'Lazy Loading', color: '#3F51B5' },
        { name: 'PrimeNG 17', color: '#3B82F6' },
        { name: 'Chart.js 4', color: '#FF6384' },
        { name: 'ng2-charts', color: '#36A2EB' },
        { name: '@swimlane/ngx-charts', color: '#A78BFA' },
        { name: 'ngx-translate', color: '#10B981' },
        { name: 'ngx-toastr', color: '#F59E0B' },
        { name: 'jsPDF', color: '#EF4444' },
        { name: 'html2canvas', color: '#06B6D4' },
        { name: 'AOS Animations', color: '#8B5CF6' },
        { name: 'EmailJS', color: '#0EA5E9' },
      ],
    },
    {
      title: 'Database & ORM',
      icon: 'database',
      gradient: 'from-orange-500 to-red-600',
      items: [
        { name: 'Microsoft SQL Server', color: '#CC2927' },
        { name: 'T-SQL', color: '#A91D22' },
        { name: 'Stored Procedures', color: '#DC2626' },
        { name: 'Query Optimization', color: '#F97316' },
        { name: 'Indexing', color: '#EA580C' },
        { name: 'Database Design', color: '#FB923C' },
        { name: 'Normalization', color: '#FBBF24' },
        { name: 'EF Core (Code-First)', color: '#68217A' },
        { name: 'Dapper', color: '#FF6B35' },
        { name: 'Repository Pattern', color: '#3B82F6' },
        { name: 'Unit of Work', color: '#6366F1' },
        { name: 'Generic Repository', color: '#8B5CF6' },
        { name: 'Specification Pattern', color: '#A855F7' },
        { name: 'DbInitializer / Seeding', color: '#10B981' },
        { name: 'Audit & Soft-Delete', color: '#059669' },
        { name: 'Identity Framework', color: '#0078D4' },
        { name: 'PostgreSQL', color: '#336791' },
      ],
    },
    {
      title: 'Caching & Real-Time',
      icon: 'realtime',
      gradient: 'from-rose-500 to-pink-600',
      items: [
        { name: 'Redis', color: '#DC382D' },
        { name: 'StackExchange.Redis', color: '#B91C1C' },
        { name: 'SignalR (Multi-Hub)', color: '#9333EA' },
        { name: 'SignalR Redis Backplane', color: '#7C3AED' },
        { name: '@microsoft/signalr 10', color: '#A855F7' },
        { name: 'WebSockets', color: '#F43F5E' },
        { name: 'Server-Sent Events', color: '#EC4899' },
        { name: 'Distributed Caching', color: '#EF4444' },
        { name: 'In-Memory Caching', color: '#F87171' },
        { name: 'Pub/Sub Messaging', color: '#FB7185' },
      ],
    },
    {
      title: 'Authentication & Security',
      icon: 'security',
      gradient: 'from-emerald-500 to-teal-600',
      items: [
        { name: 'JWT (Access Tokens)', color: '#10B981' },
        { name: 'Refresh Tokens', color: '#059669' },
        { name: 'Sliding Refresh Tokens', color: '#047857' },
        { name: 'OAuth 2.0', color: '#3B82F6' },
        { name: 'Google OAuth', color: '#4285F4' },
        { name: 'Facebook OAuth', color: '#1877F2' },
        { name: 'OTP via SMS (Twilio)', color: '#F22F46' },
        { name: 'BCrypt Hashing', color: '#EF4444' },
        { name: 'HMAC-SHA512', color: '#DC2626' },
        { name: 'RBAC', color: '#8B5CF6' },
        { name: 'Identity Framework', color: '#0078D4' },
        { name: 'CORS', color: '#F59E0B' },
        { name: 'Rate Limiting', color: '#F97316' },
        { name: 'OWASP Top 10', color: '#DC2626' },
        { name: 'HTTPS / TLS', color: '#10B981' },
        { name: 'Account Lockout', color: '#6366F1' },
      ],
    },
    {
      title: 'Payment Integrations',
      icon: 'payment',
      gradient: 'from-amber-500 to-orange-600',
      items: [
        { name: 'Paymob Payment Gateway', color: '#F47B20' },
        { name: 'Paymob Intention API', color: '#FF9800' },
        { name: 'Apple Pay', color: '#000000' },
        { name: 'Stripe (Stripe.js)', color: '#635BFF' },
        { name: 'Stripe Checkout', color: '#7C3AED' },
        { name: 'Card Tokenization', color: '#10B981' },
        { name: 'Saved Cards', color: '#3B82F6' },
        { name: 'Mobile Wallets', color: '#F59E0B' },
        { name: 'Webhooks', color: '#EF4444' },
        { name: 'HMAC Verification', color: '#DC2626' },
        { name: 'PCI Compliance', color: '#8B5CF6' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      gradient: 'from-sky-500 to-blue-600',
      items: [
        { name: 'Microsoft Azure', color: '#0078D4' },
        { name: 'Azure App Service', color: '#0EA5E9' },
        { name: 'Azure Blob Storage', color: '#3B82F6' },
        { name: 'Azure SQL Database', color: '#1E40AF' },
        { name: 'Vercel', color: '#000000' },
        { name: 'GitHub', color: '#181717' },
        { name: 'GitHub Actions (CI/CD)', color: '#2088FF' },
        { name: 'GitHub Pages', color: '#222222' },
        { name: 'PM2', color: '#2B037A' },
        { name: 'IIS', color: '#0078D4' },
        { name: 'Linux Server / SSH', color: '#FCC624' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'Environment Config', color: '#10B981' },
      ],
    },
    {
      title: 'Architecture & Patterns',
      icon: 'architecture',
      gradient: 'from-violet-500 to-purple-600',
      items: [
        { name: 'Clean Architecture (6 layers)', color: '#9333EA' },
        { name: 'Layered / N-Tier', color: '#7C3AED' },
        { name: 'Domain-Driven Design (DDD)', color: '#A855F7' },
        { name: 'CQRS', color: '#C084FC' },
        { name: 'Mediator Pattern', color: '#8B5CF6' },
        { name: 'Repository + Unit of Work', color: '#6366F1' },
        { name: 'Service Manager', color: '#4F46E5' },
        { name: 'Specification Pattern', color: '#3B82F6' },
        { name: 'Factory', color: '#0EA5E9' },
        { name: 'Singleton', color: '#06B6D4' },
        { name: 'Strategy', color: '#14B8A6' },
        { name: 'Decorator', color: '#10B981' },
        { name: 'Adapter', color: '#22C55E' },
        { name: 'Observer', color: '#84CC16' },
        { name: 'SOLID Principles', color: '#EAB308' },
        { name: 'OOP', color: '#F59E0B' },
        { name: 'DRY / KISS / YAGNI', color: '#F97316' },
        { name: 'Inversion of Control', color: '#EF4444' },
        { name: 'Atomic Design', color: '#EC4899' },
      ],
    },
    {
      title: 'Notifications & Messaging',
      icon: 'notification',
      gradient: 'from-yellow-500 to-amber-600',
      items: [
        { name: 'Firebase Admin SDK 3.x', color: '#FFA000' },
        { name: 'Firebase Cloud Messaging', color: '#FFCA28' },
        { name: 'Push Notifications (Web)', color: '#F59E0B' },
        { name: 'Twilio SDK 7.x (SMS)', color: '#F22F46' },
        { name: 'In-App Notifications', color: '#EF4444' },
        { name: 'EmailJS', color: '#0EA5E9' },
        { name: 'SMTP Email', color: '#3B82F6' },
      ],
    },
    {
      title: 'PDF, Documents & Files',
      icon: 'document',
      gradient: 'from-red-500 to-rose-600',
      items: [
        { name: 'jsPDF', color: '#EF4444' },
        { name: 'jspdf-autotable', color: '#F87171' },
        { name: 'html2canvas', color: '#06B6D4' },
        { name: 'docx (Word)', color: '#2B5797' },
        { name: 'file-saver', color: '#3B82F6' },
        { name: 'Crystal Reports', color: '#003366' },
        { name: 'ngx-json-viewer', color: '#10B981' },
        { name: 'Multipart Form Data', color: '#8B5CF6' },
        { name: 'Image Compression', color: '#F59E0B' },
        { name: 'Azure Blob Uploads', color: '#0078D4' },
      ],
    },
    {
      title: 'Internationalization (i18n)',
      icon: 'i18n',
      gradient: 'from-teal-500 to-cyan-600',
      items: [
        { name: 'ngx-translate', color: '#10B981' },
        { name: '@ngx-translate/http-loader', color: '#059669' },
        { name: 'CultureInfo (.NET)', color: '#512BD4' },
        { name: 'RTL Arabic Support', color: '#06B6D4' },
        { name: 'Multi-Language UI', color: '#0891B2' },
      ],
    },
    {
      title: 'Testing, Tools & IDEs',
      icon: 'tools',
      gradient: 'from-green-500 to-emerald-600',
      items: [
        { name: 'Jasmine', color: '#8A4182' },
        { name: 'Karma', color: '#3F2A56' },
        { name: 'Karma Coverage', color: '#10B981' },
        { name: 'ESLint', color: '#4B32C3' },
        { name: 'Prettier', color: '#F7B93E' },
        { name: 'TypeScript Strict', color: '#3178C6' },
        { name: 'xUnit', color: '#512BD4' },
        { name: 'Postman', color: '#FF6C37' },
        { name: 'Swagger UI', color: '#85EA2D' },
        { name: 'Visual Studio 2022', color: '#5C2D91' },
        { name: 'VS Code', color: '#007ACC' },
        { name: 'Cursor', color: '#000000' },
        { name: 'JetBrains Rider', color: '#000000' },
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub CLI', color: '#181717' },
        { name: 'SSMS', color: '#CC2927' },
        { name: 'DBeaver', color: '#382923' },
        { name: 'Figma', color: '#F24E1E' },
        { name: 'JIRA', color: '#0052CC' },
        { name: 'Confluence', color: '#172B4D' },
      ],
    },
    {
      title: 'Methodologies',
      icon: 'methodology',
      gradient: 'from-indigo-500 to-purple-600',
      items: [
        { name: 'Agile', color: '#0052CC' },
        { name: 'Scrum', color: '#3B82F6' },
        { name: 'Kanban', color: '#10B981' },
        { name: 'Code Review', color: '#8B5CF6' },
        { name: 'Pair Programming', color: '#A855F7' },
        { name: 'TDD', color: '#EF4444' },
        { name: 'Continuous Integration', color: '#2088FF' },
        { name: 'Continuous Deployment', color: '#0EA5E9' },
        { name: 'Git Flow', color: '#F05032' },
        { name: 'Conventional Commits', color: '#F59E0B' },
      ],
    },
  ];
}
