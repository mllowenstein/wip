import { ChartConfig } from "../../../shared/chart/chart.model";
import { Engineer, SiteContent, SiteModule, SectionNav, SkillMetric, TimelineEvent, EducationMetric, BlogPost, ProjectSummary, PageRoute, NavRoute } from "../schema";
import { ContactType } from "../schema/enums";

export const WhoAmI: Engineer = {
  name: 'Michael Lowenstein',
  title: 'Senior Software Engineer',
  opentofeedback: true,
  opentowork: true,
  contacts: [
    {
      label: 'Email',
      type: ContactType.Email,
      at: 'michael@lowenstein.ca',
    },
    {
      label: 'Mobile',
      type: ContactType.Mobile,
      at: '+1(403)667-0161',
    },
    {
      label: 'GitHub',
      type: ContactType.GitHub,
      at: 'github.com/mllowenstein',
    },
    {
      label: 'LinkedIn',
      type: ContactType.LinkedIn,
      at: 'linkedin.com/in/mlo2gs',
    },
  ]
};

export const PortfolioSlugs: string[] = [
  'aboutme',
  'experience',
  'education',
  'skills',
];

export const PortfolioNavs: SectionNav[] = [
  {
    display: 'Work Experience',
    value: 'experience',
    order: 1,
  },
  {
    display: 'Education',
    value: 'education',
    order: 2,
  },
  {
    display: 'Skills & Interests',
    value: 'skillsandinterests',
    order: 3,
  },
];

export const ABOUT_ME_NAVS: SectionNav[] = [
  {
    display: 'Work Experience',
    value: 'workexperience',
    order: 1,
  },
  {
    display: 'Skills & Interests',
    value: 'skillsandinterests',
    order: 1,
  },
  {
    display: 'Education',
    value: 'education',
    order: 2,
  },
  {
    display: 'Summary',
    value: 'summary',
    order: 4,
  },
];

export const TOP_OF_ABOUT_ME: string = 'workexperience';

export const WORK_METRICS: TimelineEvent[] = [
  {
    id: 0,
    name: 'Freelance Web Developer',
    date: '2015 - 2016',
    description: 'National Neon Ltd. - Growing Sign Manufacturing Business with clients globally now.'
  }, {
    id: 1,
    name: 'Software Developer & Data Analyst',
    date: '2016 - 2017',
    description: 'SIA Wealth Management - Assisted in the rebuild & design of the new membership portal and constructed a library of stock market data-visualization tools'
  }, {
    id: 2,
    name: 'Freelance Web Developer',
    date: '2017 - 2022',
    description: 'Peloton Computer Enterprises - Software Engineer on ProdView and LandView Products as well as the CORE Platform Development Team.'
  }, {
    id: 3,
    name: 'Senior Software Engineer',
    date: '2022 - 2024',
    description: 'FullStack Labs - '
  }, {
    id: 4,
    name: 'Senior Software Engineer',
    date: '2024 - Present',
    description: 'NCAL Engineering - Independent Contracting providing custom software solutions to optimize business operations and reduce logistical bottlenecks through automation.'
  }, {
    id: 5,
    name: 'Senior Backend Software Engineer',
    date: '2024 - Present',
    description: 'College House @ House Analytics - '
  },
];


export const SkillsMetrics: SkillMetric[] = [
  { id: 1, name: 'Angular', rating: 100, years: 8, group: ['Frontend'], comments: '' },
  { id: 2, name: 'Vue', rating: 85, years: 5, group: ['Frontend'], comments: '' },
  { id: 3, name: 'React', rating: 85, years: 5, group: ['Frontend'], comments: '' },
  { id: 4, name: 'Next.JS', rating: 80, years: 4, group: ['Frontend'], comments: '' },
  { id: 5, name: 'Typescript', rating: 100, years: 8, group: ['Frontend', 'Backend', 'Fullstack'], comments: '' },
  { id: 6, name: 'Node.JS/Express', rating: 100, years: 9, group: ['Backend'], comments: '' },
  { id: 7, name: '.NET/Core C#', rating: 95, years: 8, group: ['Backend'], comments: '' },
  { id: 8, name: 'NestJS', rating: 95, years: 6, group: ['Backend'], comments: '' },
  { id: 9, name: 'Python', rating: 90, years: 9, group: ['Backend'], comments: '' },
  { id: 10, name: 'Test Automation', rating: 90, years: 7, group: ['Backend'], comments: '' },
  { id: 11, name: 'Perl Backend Development & Scripting', rating: 90, years: 5, group: ['Backend'], comments: '' },
  { id: 12, name: 'Database Administration', rating: 90, years: 5, group: ['Backend'], comments: '' },
  { id: 13, name: 'AI & ML Integrations', rating: 85, years: 3, group: ['Backend'], comments: '' },
  { id: 14, name: 'Linux Server Administration', rating: 75, years: 6, group: ['Backend'], comments: '' },
  { id: 15, name: 'Shell Scripting', rating: 80, years: 4, group: ['Backend'], comments: '' },
  { id: 16, name: 'Docker', rating: 50, years: 4, group: ['Backend'], comments: '' },
  { id: 17, name: 'Kubernetes', rating: 50, years: 2, group: ['Backend'], comments: '' },
];

export const EducationMetrics: EducationMetric[] = [
  {
    years: '2010 - 2014',
    field: 'Kinesiology',
    degree: "Bachelor's of Science",
    institution: 'University of Calgary',
    specialty: 'Biomechanics',
    year_i: 2010,
    year_f: 2014,
  },
  {
    years: '2014 - 2017',
    field: 'Computer Science',
    degree: "Bachelor's of Science",
    institution: 'University of Calgary',
    specialty: 'Software Engineering',
    year_i: 2014,
    year_f: 2017,
  }
];

export const HOME: SiteContent = {
  id: 'home',
  page: 'Home',
  body: {
    content: "Wecome to my portfolio - take a look around, leave some feedback or shoot me an email. Check out the About Me page for more details on my career and grab a copy of my resume` to go."
  },
  bulletpoints: [],
  footer: {
    content: "Solving your problems (hopefully), from my backyard."
  },
  header: {
    content: "Michael Lowenstein"
  },
  subheader: {
    content: "Senior Software Engineer | Canada"
  }
};

export const ABOUT_ME: SiteContent = {
  id: 'about-me',
  page: 'About Me',
  body: {
    content: ""
  },
  bulletpoints: [],
  header: {
    content: "Some information about my career"
  },
  subheader: {
    content: "Back to the top, or get in touch on Contact Me."
  },
  footer: {
    content: "Back to the top, or get in touch on Contact Me."
  }
};

export const CONTACT_ME: SiteContent = {
  id: 'contact-me',
  page: 'Contact Me',
  body: {
    content: "Turn to Fric, Lowenstein & Co. LLP for highly <a class=\"text-link\" routerLink=\"../areas-of-law\">experienced legal representation.</a>       Serving clients in Calgary and throughout Alberta, Fric, Lowenstein & Co. LLP offers a wide       range of areas of expertise for individuals and businesses throughout Alberta.       Trust the <a class=\"text-link\" routerLink=\"../about-us\">dynamic team</a> from        Fric, Lowenstein & Co. LLP for comprehensive legal representation.        Personalized Legal Services in Calgary              No matter what your specific legal challenges may be, choose Fric, Lowenstein & Co.       LLP and place 3 decades of legal expertise on your side. Legal challenges can be a       stressful and difficult time for you, your family or your business, but by choosing        Fric, Lowenstein & Co. LLP, you can rely on legal services completely customized to your specific needs."
  },
  bulletpoints: [],
  footer: {
    content: "Solving your problems (hopefully), from my backyard."
  },
  header: {
    content: "Michael Lowenstein"
  },
  subheader: {
    content: "Senior Software Engineer | Canada"
  }
};

export const SeedBlogPosts: BlogPost[] = [
  {
    "id": "1",
    "title": "Building Scalable Web Apps with Node.js and Express",
    "subtitle": "A guide to structuring your backend for scalability",
    "slug": "scalable-nodejs-web-apps",
    "date": new Date('2024-02-15T10:00:00Z'),
    "content": "In this article, we explore how to structure a Node.js backend using Express to handle high-traffic loads efficiently. We cover best practices, middleware design, and database optimizations..."
  },
  {
    "id": "2",
    "title": "State Management in React: Redux vs Context API",
    "subtitle": "Choosing the right state management solution",
    "slug": "react-state-management-redux-context",
    "date": new Date('2024-03-01T12:30:00Z'),
    "content": "State management in React is crucial for performance and maintainability. In this post, we compare Redux and the Context API, discussing their advantages, disadvantages, and best use cases..."
  },
  {
    "id": "3",
    "title": "Getting Started with Angular and RxJS",
    "subtitle": "Understanding reactive programming in Angular",
    "slug": "angular-rxjs-introduction",
    "date": new Date('2024-03-10T14:15:00'),
    "content": "Angular’s power lies in its ability to handle complex asynchronous operations using RxJS. This tutorial introduces the core concepts of Observables, Subjects, and how to use them in Angular apps..."
  },
  {
    "id": "4",
    "title": "Vue.js 3: The Composition API Explained",
    "subtitle": "A deep dive into Vue's new Composition API",
    "slug": "vue3-composition-api",
    "date": new Date('2024-03-20T08:45:00Z'),
    "content": "Vue 3 introduces the Composition API as a more flexible way to structure components. We explore how to use it effectively and compare it with the Options API..."
  },
  {
    "id": "5",
    "title": "Authentication in Full-Stack Apps: JWT vs Session-Based",
    "subtitle": "Secure user authentication strategies",
    "slug": "fullstack-authentication-jwt-vs-session",
    "date": new Date('2024-04-05T17:00:00Z'),
    "content": "When building a full-stack app, choosing between JWT and session-based authentication can be tricky. This guide breaks down the pros and cons of each approach and helps you decide which suits your project..."
  },
  {
    "id": "6",
    "title": "Optimizing Performance in React and Vue Applications",
    "subtitle": "Improve your web app’s speed and responsiveness",
    "slug": "performance-optimization-react-vue",
    "date": new Date('2024-04-15T09:30:00Z'),
    "content": "In modern web development, performance is a key factor. We discuss optimization techniques such as lazy loading, memoization, and virtual DOM updates to keep your React and Vue apps running smoothly..."
  },
  {
    "id": "7",
    "title": "Microservices with Node.js and Docker",
    "subtitle": "Breaking down monoliths with microservices",
    "slug": "nodejs-microservices-docker",
    "date": new Date('2024-04-22T13:45:00Z'),
    "content": "Microservices architecture is increasingly popular for scalable applications. Learn how to design, deploy, and manage microservices using Node.js and Docker..."
  },
  {
    "id": "8",
    "title": "Testing Strategies for Full-Stack Applications",
    "subtitle": "Unit, Integration, and End-to-End Testing",
    "slug": "fullstack-testing-strategies",
    "date": new Date('2024-05-05T16:20:00Z'),
    "content": "Effective testing ensures a stable application. This post covers different testing strategies, tools, and frameworks for testing full-stack applications in JavaScript environments..."
  }
];

export const ProjectsList: ProjectSummary[] = [
  {
    id: 1,
    dates: '2022 - 2023',
    company: 'FullStack Labs',
    title: 'ETL Data Synchronization Pipelines',
    summary: 'Coming Soon...',
    // logo: 'src/assets/icons/fsl.png',
  },
  {
    id: 2,
    dates: '2024 - 2025',
    company: 'NCAL Engineering',
    title: 'End-to-End Custom Software Development and Business Automation',
    summary: 'Coming Soon...',
    // logo: 'src/assets/icons/fsl.png',
  },
  {
    id: 3,
    dates: 'Fall 2024',
    company: 'House Analytics',
    title: 'Custom Algorithms with CQRS-Integrated Machine Learning',
    summary: 'Coming Soon...',
    // logo: 'src/assets/icons/fsl.png',
  },
];
export const PAGE_LINKS: PageRoute[] = [
  {
    label: 'Work Experience',
    anchor: '#experience',
    options: {
      active: true,
      order: 1,
    }
  },
  {
    label: 'Skills',
    anchor: '#skills',
    options: {
      active: false,
      order: 2,
    }
  },
  {
    label: 'Education',
    anchor: '#education',
    options: {
      active: false,
      order: 3,
    }
  },
  {
    label: 'Projects',
    anchor: '#projects',
    options: {
      active: false,
      order: 4,
    }
  }
];

export const NAV_LINKS: NavRoute[] = [
];

export const LineChartConfig: ChartConfig = {
  type: 'line',
  data: [],
  options: { title: { text: 'Line View' } }
};

export const BarChartConfig: ChartConfig = {
  type: 'bar',
  data: [],
  options: { title: { text: 'Bar Breakdown' } }
};

export const ComboChartConfig: ChartConfig = {
  type: 'combo',
  data: [],
  options: { title: { text: 'Mixed Analytics' } }
};

export const ScatterChartConfig: ChartConfig = {
  type: 'scatter',
  data: [],
  options: { title: { text: 'Time-Series Analytics' } }
};

export const SITEMODULES: SiteModule[] = [
  {
    name: 'portfolio',
    title: 'My Professional Bio',
    summary: `
      Take a look around, create an account or don't - if you can't
      stay long, check out the Contact page, shoot me an email and
      grab a copy of my resume'.
    `,
    subinfo: `
      You're visit to my site and any feedback you may have is greatly appreciated.
    `,
    contents: [],
    public: true,
  },
  {
    name: 'dashboard',
    title: 'Realtime Dashboards',
    summary: `
      Some of this data is real, and some is auto-generated and/or mocked data -
      check the dashbopards, then look around the site, and see what changes.
    `,
    subinfo: `
      No information about users is collected or stored across sessions,
      unless a user account has been created in the Members' Section.
    `,
    contents: [],
    public: true,
  },
  {
    name: 'contact',
    title: 'Contact Me',
    summary: `
      Some of this data is real, and some is auto-generated and/or mocked data -
      check the dashbopards, then look around the site, and see what changes.
    `,
    subinfo: `
      No information about users is collected or stored across sessions,
      unless a user account has been created in the Members' Section.
    `,
    contents: [],
    public: true,
  },
];
