import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: 'flagship' | 'production' | 'fullstack' | 'foundational';
  badge?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  demo?: string;
  github?: string;
  isPrivate?: boolean;
  delay: number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  activeFilter: 'all' | 'flagship' | 'production' | 'fullstack' | 'foundational' = 'all';

  filters = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'flagship' as const, label: 'Flagship' },
    { id: 'production' as const, label: 'Production' },
    { id: 'fullstack' as const, label: 'Full-Stack' },
    { id: 'foundational' as const, label: 'Foundational' },
  ];

  projects: Project[] = [
    // ========== FLAGSHIP PROJECTS ==========
    {
      title: 'Voltyks API — EV Charging Platform',
      category: 'flagship',
      badge: 'v2.2.0 · Azure',
      description: 'Production-grade enterprise backend for an Electric Vehicle charging marketplace. Architected across 6 Clean Architecture layers with hybrid CQRS data layer (EF Core 8 writes + Dapper 2.1 high-performance reads), real-time charging system with SignalR + Redis backplane, Paymob Intention API with Apple Pay & card tokenization, and HMAC-SHA512 webhook verification (PCI compliant). Deployed on Microsoft Azure.',
      highlights: [
        '6-layer Clean Architecture (API, Application, Core, Infrastructure, Persistence, Admin Dashboard)',
        '3 SignalR hubs: ChargingRequestHub, NotificationHub, ProcessHub',
        '18 controllers including Auth, Charger, Brand, Vehicle, Payment, Store, Protocol, Admin, Reports',
        'JWT auth + refresh tokens, Google + Facebook OAuth 2.0, OTP via Twilio 7.x SMS',
        'Firebase Admin SDK 3.3 for cross-platform push notifications',
        'Azure Blob Storage for product images',
      ],
      technologies: ['.NET 8', 'EF Core 8', 'Dapper 2.1', 'SQL Server', 'SignalR', 'Redis', 'Azure', 'JWT', 'OAuth 2.0', 'Paymob', 'Apple Pay', 'Firebase FCM', 'BCrypt', 'AutoMapper 14'],
      isPrivate: true,
      delay: 0,
    },
    {
      title: 'Voltyks Admin Dashboard',
      category: 'flagship',
      badge: 'Angular 20',
      description: 'Modern admin dashboard for the Voltyks EV charging platform. Built with Angular 20 standalone components, real-time analytics powered by SignalR, and PDF report generation. Includes 25+ feature modules covering users, chargers, brands, vehicles, store, payments, fees, protocols, complaints, reports, terms, notifications, backup, and admin mode.',
      highlights: [
        '25+ feature modules with feature-based folder structure',
        'Real-time updates via @microsoft/signalr 10 connected to backend hubs',
        'Analytics with Chart.js 4 + ng2-charts',
        'PDF reports via jsPDF + html2canvas',
        'Core layer: guards, interceptors, models, services',
        'Deployed on Vercel with separate GitHub Pages build configuration',
      ],
      technologies: ['Angular 20.3', 'TypeScript 5.9', 'Angular Material', 'Chart.js 4', 'ng2-charts', '@microsoft/signalr 10', 'jsPDF', 'html2canvas', 'Vercel'],
      github: 'https://github.com/AhmedSalem104/Voltyks_Angular',
      delay: 100,
    },
    {
      title: 'Sekka API — Smart Delivery Backend',
      category: 'flagship',
      badge: 'سِكّة',
      description: 'Production backend powering 579+ endpoints, 83+ services, 82 DB tables, 11 background services, 4 SignalR hubs, and 452+ DTOs. Engineered as a .NET 8 Clean Architecture solution across 6 projects with FluentValidation, API versioning, Redis distributed caching, and Firebase FCM integration.',
      highlights: [
        '6 projects: Sekka.API, Sekka.Application, Sekka.Core, Sekka.Infrastructure, Sekka.Persistence, Sekka.AdminControlDashboard',
        'API versioning with Asp.Versioning.Mvc + ApiExplorer',
        '4 SignalR hubs: OrderTrackingHub, ChatHub, CashAlertHub, NotificationHub',
        '11 background services: scheduled jobs, settlements, RFM analysis, surge pricing, analytics',
        '4 custom middleware: GlobalExceptionHandler, LocaleNormalization, Maintenance, RequestLogging',
        'EF Core Interceptors for audit trails and soft-delete; DbInitializer for seeding',
      ],
      technologies: ['.NET 8', 'EF Core 8', 'FluentValidation 11', 'Asp.Versioning', 'Redis', 'SignalR', 'Firebase Admin 3.5', 'JWT 8.3', 'AutoMapper 16'],
      github: 'https://github.com/AhmedSalem104/Sekka.APIs',
      delay: 200,
    },
    {
      title: 'Sekka Admin Panel',
      category: 'flagship',
      badge: 'Angular 21',
      description: 'Admin panel built with the latest Angular 21 standalone components and Angular CLI 21.2. Real-time operations monitoring, Chart.js dashboards, and production-ready Vercel deployment configured with proxy.conf.json for backend integration.',
      highlights: [
        'Latest Angular 21.2 with standalone components',
        'Real-time operations monitoring via Chart.js dashboards',
        'proxy.conf.json for backend integration',
        'vercel.json for production deployment',
      ],
      technologies: ['Angular 21.2', 'Chart.js 4', 'ng2-charts 10', 'RxJS 7.8', 'TypeScript 5.9', 'Vercel'],
      github: 'https://github.com/AhmedSalem104/Sekka.Admin-Panel.Angular',
      delay: 300,
    },
    {
      title: 'Sekka Landing Page',
      category: 'production',
      badge: 'Bilingual',
      description: 'Bilingual (Arabic/English) marketing landing page built with vanilla HTML5, CSS3, and JavaScript. Custom i18n.js implementation, theme switching (light/dark) via theme.js, deployed on Vercel.',
      highlights: [
        'Custom i18n.js for bilingual Arabic/English content',
        'Light/dark theme switching via theme.js',
        'Pure vanilla stack — no frameworks',
      ],
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Vercel'],
      demo: 'https://sekka-landing-page.vercel.app',
      github: 'https://github.com/AhmedSalem104/Sekka_Landing_Page',
      delay: 400,
    },

    // ========== PRODUCTION & FULL-STACK PROJECTS ==========
    {
      title: 'LogiFit — Fitness & Logistics App',
      category: 'fullstack',
      badge: 'Angular 18',
      description: 'Full-featured fitness and logistics application built with Angular 18 and PrimeNG 17. Visualizes analytics with @swimlane/ngx-charts, generates downloadable PDF and Word reports, and supports multi-language UI via ngx-translate.',
      highlights: [
        'Analytics with @swimlane/ngx-charts 21',
        'Downloadable PDF and Word reports (jsPDF, jspdf-autotable, docx 9, file-saver)',
        'PrimeNG 17 component library',
        'Multi-language support via ngx-translate',
      ],
      technologies: ['Angular 18.2', 'PrimeNG 17', 'Tailwind CSS', 'ngx-translate', 'ngx-charts 21', 'jsPDF', 'docx 9', 'sweetalert2 11', 'Vercel'],
      demo: 'https://logi-fit-angular.vercel.app',
      delay: 500,
    },
    {
      title: 'E-Commerce Web App',
      category: 'fullstack',
      badge: 'Angular 17 SSR',
      description: 'Full-featured e-commerce front-end with Angular 17 Server-Side Rendering for SEO and faster TTI. Custom Express server runs Angular SSR. Includes Stripe payment integration, JWT authentication, and internationalization.',
      highlights: [
        'Angular 17 SSR with custom Express server (server.ts)',
        'Stripe payment integration',
        'JWT authentication with jwt-decode',
        'i18n via @ngx-translate/core + http-loader',
        'UI: ngx-owl-carousel-o, ngx-spinner, ngx-toastr, sweetalert2',
      ],
      technologies: ['Angular 17.3 SSR', 'Express', 'Tailwind CSS', 'ngx-translate', 'JWT', 'Stripe', 'sweetalert2', 'FontAwesome'],
      demo: 'https://e-commerce-project-two-sandy.vercel.app',
      github: 'https://github.com/AhmedSalem104/E-Commerce-Project',
      delay: 600,
    },
    {
      title: 'E-Commerce APIs — .NET 8 Layered Backend',
      category: 'fullstack',
      badge: '.NET 8',
      description: 'Backend with Layered Architecture: Core (Domain entities + Contracts), Infrastructure, Services, Shared, and Store.G06.Api. Implements Repository + Unit of Work pattern with Entity Framework Core. RESTful APIs for authentication, product catalog, category management, shopping cart, and order processing.',
      highlights: [
        'Layered Architecture: Core / Infrastructure / Services / Shared / API',
        'Repository + Unit of Work pattern with EF Core',
        'RESTful APIs: auth, products, categories, cart, orders',
        'Swagger / OpenAPI via Swashbuckle 6.6',
      ],
      technologies: ['.NET 8 Web API', 'Layered Architecture', 'EF Core', 'SQL Server', 'Swashbuckle 6.6', 'Repository Pattern'],
      github: 'https://github.com/AhmedSalem104/E-Commerce-APIs',
      delay: 700,
    },
    {
      title: 'ECommerceAPi — Clean Architecture Backend',
      category: 'fullstack',
      badge: 'Alternate',
      description: 'Alternative implementation of the e-commerce backend with full Clean Architecture: Domain (Models + Contracts), Persistence (Repositories + UnitOfWork + DbInitializer), Presentation, Services, Services.Abstractions, and Shared. Uses AssemblyReference pattern for cross-project type discovery.',
      highlights: [
        'Clean Architecture: Domain / Persistence / Presentation / Services',
        'AssemblyReference pattern for cross-project type discovery',
        'InvariantGlobalization enabled for AOT compatibility',
        'DbInitializer for database seeding',
      ],
      technologies: ['.NET 8 Web API', 'Clean Architecture', 'EF Core', 'Repository Pattern', 'AOT'],
      github: 'https://github.com/AhmedSalem104/ECommerceAPi',
      delay: 800,
    },
    {
      title: 'E-Commerce — Angular Front-End',
      category: 'fullstack',
      badge: 'Initial',
      description: 'Initial scaffold for an Angular-based e-commerce front-end with Stripe payment integration and REST API integration.',
      technologies: ['Angular', 'Stripe', 'REST APIs', 'TypeScript'],
      github: 'https://github.com/AhmedSalem104/E-Commerce',
      delay: 900,
    },
    {
      title: 'Social App — Angular 17 SSR',
      category: 'fullstack',
      badge: 'SSR',
      description: 'Social networking platform with Angular 17 SSR, custom Express server, Tailwind CSS, and Flowbite components. JWT authentication via jwt-decode 4, with user feedback via ngx-toastr 19 and ngx-spinner 17.',
      technologies: ['Angular 17.3 SSR', 'Express', 'Tailwind CSS', 'Flowbite', 'JWT', 'ngx-toastr 19', 'ngx-spinner 17', 'FontAwesome'],
      demo: 'https://social-app-orpin-theta.vercel.app',
      github: 'https://github.com/AhmedSalem104/Social-App',
      delay: 1000,
    },
    {
      title: 'Personal Portfolio',
      category: 'production',
      badge: 'Angular 20',
      description: 'Modern responsive portfolio with bilingual (Arabic/English) READMEs and content. Animations powered by AOS (Animate On Scroll), and a contact form integrated with EmailJS 4. Deployed on Vercel.',
      technologies: ['Angular 20.3', 'Tailwind CSS', 'AOS', 'EmailJS 4', 'Vercel'],
      demo: 'https://ahmedsalem-portfolio.vercel.app',
      github: 'https://github.com/AhmedSalem104/Portfolio_',
      delay: 1100,
    },
    {
      title: 'Maintenance Management System',
      category: 'production',
      badge: 'Solution Software',
      description: 'Maintenance management system for an automotive and equipment servicing company. Implemented MVC pattern with Code-First Entity Framework approach. Designed multiple UI structures (popup, flat, header-detail), integrated Crystal Reports, and applied RBAC with SOLID principles.',
      highlights: [
        'ASP.NET MVC with EF Code-First',
        'Multi-screen UI: popup, flat, header-detail',
        'Crystal Reports for detailed business reports',
        'RBAC for user permissions and security',
      ],
      technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'Crystal Reports', 'SOLID', 'RBAC'],
      isPrivate: true,
      delay: 1200,
    },

    // ========== FOUNDATIONAL PROJECTS ==========
    {
      title: 'Diet To Door (V1 & V2)',
      category: 'foundational',
      badge: 'ASP.NET MVC',
      description: 'Health food delivery platform built across two iterations (V1 and V2). Includes DataAccess, DataMapping, NumbersToTexts helper, and Reports modules.',
      technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'Crystal Reports', 'Razor Views'],
      github: 'https://github.com/AhmedSalem104/DietToDoor',
      delay: 1300,
    },
    {
      title: 'Quiz App',
      category: 'foundational',
      description: 'Interactive quiz application with dynamic questions, scoring system, and timer. Built with vanilla JavaScript.',
      technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/AhmedSalem104/QuizAppProject',
      delay: 1400,
    },
    {
      title: 'QR Code Generator',
      category: 'foundational',
      description: 'Custom QR code generator from text or URLs. Built with vanilla JavaScript.',
      technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/AhmedSalem104/QR-Code-Generator',
      delay: 1500,
    },
    {
      title: 'Weather App',
      category: 'foundational',
      description: 'Weather application using Fetch API and OpenWeather external API for live weather data.',
      technologies: ['Vanilla JavaScript', 'Fetch API', 'OpenWeather API'],
      github: 'https://github.com/AhmedSalem104/Weather_App',
      delay: 1600,
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === this.activeFilter);
  }

  setFilter(filter: 'all' | 'flagship' | 'production' | 'fullstack' | 'foundational') {
    this.activeFilter = filter;
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      flagship: 'Flagship',
      production: 'Production',
      fullstack: 'Full-Stack',
      foundational: 'Foundational',
    };
    return labels[category] ?? category;
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      flagship: 'from-amber-500 to-orange-600',
      production: 'from-emerald-500 to-teal-600',
      fullstack: 'from-blue-500 to-indigo-600',
      foundational: 'from-purple-500 to-pink-600',
    };
    return colors[category] ?? 'from-primary to-secondary';
  }
}
