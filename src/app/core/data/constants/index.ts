import { SiteContent, SectionNav, SkillMetric } from "../schema";

export const ABOUT_ME_SECTIONS: SectionNav[] = [
  {
    display: 'Skills & Interests',
    value: 'skillsandinterests',
    order: 1,
  },
  {
    display: 'Work Experience',
    value: 'workexperience',
    order: 2,
  },
  {
    display: 'Education',
    value: 'education',
    order: 2,
  },
  {
    display: 'Memorable Accomplishments & Challenges',
    value: 'memorableevents',
    order: 3,
  },
  {
    display: 'Summary',
    value: 'summary',
    order: 4,
  },
];

export const SkillsMetrics: SkillMetric[] = [
  { id: 1, name: 'Angular', rating: 100, comments: '' },
  { id: 2, name: 'Typescript', rating: 100, comments: '' },
  { id: 3, name: 'Node.JS/Express', rating: 100, comments: '' },
  { id: 4, name: '.NET/Core C#', rating: 95, comments: '' },
  { id: 5, name: 'NestJS', rating: 95, comments: '' },
  { id: 6, name: 'Python', rating: 90, comments: '' },
  { id: 7, name: 'Test Automation', rating: 90, comments: '' },
  { id: 8, name: 'Perl Backend Development & Scripting', rating: 90, comments: '' },
  { id: 9, name: 'Database Administration', rating: 90, comments: '' },
  { id: 10, name: 'AI & ML Integrations', rating: 85, comments: '' },
  { id: 11, name: 'Linux Server Administration', rating: 75, comments: '' },
  { id: 12, name: 'Shell Scripting', rating: 80, comments: '' },
  { id: 13, name: 'Docker', rating: 50, comments: '' },
  { id: 14, name: 'Kubernetes', rating: 50, comments: '' },
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
    content: "Welcome"
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
