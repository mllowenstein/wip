import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Education, Experience } from '../../core/data/schema';

@Component({
  selector: 'mll-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  isMobile: boolean = false;
  scrolled: boolean = false;

  ngOnInit(): void {
    this.checkViewport();
  }

  // Optional: React to window resize to switch layout modes
  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  private checkViewport(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  // Optional: Track scroll for animation, navbar transparency, etc.
  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }


  // Personal Info
  name = 'Michael Lowenstein';
  title = 'Senior Software Engineer';
  summary = `Versatile Senior Software Engineer with expertise in designing, developing, and delivering scalable enterprise software. Proven success in front-end and back-end engineering, releasing products for businesses of all sizes. Skilled in modernizing systems, managing technical documentation, mentoring developers, and crafting impactful, future-proof solutions that balance technical feasibility with strategic goals.`;
  contact = {
    phone: '+1 403-667-0161',
    email: 'michael@lowenstein.ca',
    linkedin: 'https://linkedin.com/in/mlo2gs',
  };
  resumeUrl = '/assets/Michael_Lowenstein_2025.pdf';

  // Work Experience
  experiences: Experience[] = [
    {
      position: 'Senior Back-end Software Engineer (Freelance)',
      company: 'College House at House Analytics',
      period: '2024–Present',
      highlights: [
        'Designed and implemented enterprise-scale .NET Core solutions, including CQRS Web APIs, database administration, and AWS infrastructure integration',
        'Led planning, prototyping, and deployment of back-end infrastructure for analytics products, modernizing legacy systems and creating a test automation framework',
        'Developed and prototyped a new Message Bus architecture using AWS MQ/SQS, RabbitMQ, Redis, and Kafka',
        'Prototyped machine learning algorithms in Python, R, and Flask, and integrated ML features into production systems',
        'Collaborated with stakeholders to future-proof products, authoring detailed documentation for end-users and internal teams',
      ],
    },
    {
      position: 'Senior Software Engineer',
      company: 'NCAL Engineering',
      period: '2022–2024',
      highlights: [
        'Developed end-to-end software solutions for data management and analysis, overseeing full SDLC',
        'Implemented ETL processes to sync time-tracking APIs using NestJS, Node.js JWT auth, Python scripting, and Redis',
        'Designed and deployed invoice automation and analytics dashboards with Angular 16/17, React, and .NET Core APIs',
        'Built a custom data management warehouse for engineering graphics and metrics using Angular and Node.js microservices',
        'Engineered ML models for anomaly detection across historical and live data with Python and TypeScript',
        'Managed DevOps pipelines on Azure Containers, App Services, remote VMs, and Docker Compose',
        'Delivered an Invoice Automation Platform saving a week of manual work each month',
      ],
    },
    {
      position: 'Senior Software Engineer',
      company: 'FullStack Labs',
      period: '2022–2024',
      highlights: [
        'Led front-end design for a Custom Cabinetry CRM, optimizing UX and performance',
        'Maintained an Enterprise Association Management Portal using Angular 9–17, GraphQL, and .NET Core APIs',
        'Built Angular front-ends and authentication APIs integrated with Python automated tests',
        'Co-led development of FullStack Labs Admin App with React.js, Next.js, and Azure DevOps',
        'Developed Toggl and HubSpot ETL pipelines, improving payroll auditing accuracy from 96.1% to 99.8%',
        'Authored back-end ETLs in TypeScript, Node.js Express, and NestJS for automated backups on AWS',
        'Conducted R&D prototyping and A/B testing with Python and cron-scheduled workflows',
        'Developed Python scripts and microservices for data scraping and CRM synchronization',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Peloton Computer Enterprises',
      period: '2017–2022',
      highlights: [
        'Built ProdView, an oil & gas task-scheduling web app with ASP.NET, Angular 7, Cosmos DB, and Python microservices',
        'Created MVPs for client demos with Node.js, TypeScript, JavaScript, and Express',
        'Developed Angular 7–9 front-end prototypes to accelerate feedback loops',
        'Maintained and enhanced a Land Management System using Perl, Python, Rust, and JavaScript',
        'Managed Linux servers, optimized PostgreSQL and FreeBSD, and built microservices for reliability',
      ],
    },
    {
      position: 'Software Developer',
      company: 'SIACharts (SIA Wealth Management)',
      period: '2016–2017',
      highlights: [
        'Rebuilt a legacy application with modern web tech and a User Settings Console for streamlined account management',
        'Developed financial market analysis tools, visualizations, and calculators',
        'Used MSSQL, ASP.NET (C#), JavaScript, jQuery, Bootstrap, and Python test suites to ensure performance',
      ],
    },
  ];

  // Core Skills & Certifications
  skills = [
    'Angular (v9–v20)', 'React', 'Next.js', 'Vue', 'Python', 'Node.js', 'NestJS', 'Express',
    'C#', 'ASP.NET', '.NET Core', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS',
    'Perl', 'Rust', 'PostgreSQL', 'MS SQL Server', 'NoSQL', 'AWS', 'Heroku', 'Azure',
    'Docker', 'Kubernetes', 'Shell Scripting', 'Linux Sys Admin', 'DevOps'
  ];

  // Education
  education: Education[] = [
    { degree: 'Bachelor of Science in Computer Science', school: 'University of Calgary', year: '2017' },
    { degree: 'Bachelor of Science in Kinesiology',    school: 'University of Calgary', year: '2014' },
  ];
}
