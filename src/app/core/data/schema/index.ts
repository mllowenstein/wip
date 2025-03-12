// reusable initerfaces & dataabase mapping

export interface SiteSection {
  contents?: { sections: SiteSection[] };
  content?: string | string[];
  label?: string;
  options?: any;
  id?: any;
}

export interface SiteContent {
  id: string;
  page: string;
  section?: string;
  position?: string;
  bulletpoints?: string[];
  tag?: string;
  title?: SiteSection | string;
  subtitle?: SiteSection | string;
  body: SiteSection;
  footer?: SiteSection;
  images?: string[];
  links?: SiteSection | string[];
  lastupdated?: string;
  approved?: boolean;
  header?: SiteSection;
  subheader?: SiteSection;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  education: string;
  practiceProfile: string;
  professionalAssociations: string[];
  communityInvolvement: string[];
  imageUrl: string;
}

export interface SectionNav {
  display: string;
  value: string;
  order: number;
}

export interface Section {
  label: string;
  id: number;
  options: object;
  route?: string;
}

export interface SkillMetric {
  standalone?: boolean;
  comments?: string;
  context?: number;
  group?: string[];
  rating: number;
  years: number;
  name: string;
  id?: number;
}

export interface EducationMetric {
  extracurriculars?: string;
  alternative?: boolean;
  institution: string;
  specialty?: string;
  year_i?: number;
  year_f?: number;
  degree: string;
  years: string;
  field: string;
}

export interface TimelineEvent {
  id: number;
  name: string;
  date: string;
  description: string;
}

export interface ContactSubmission {
  idkey?: string;
  email?: string;
  message: string;
  lastName: string;
  firstName: string;
}

export interface BlogPost {
  id: string;
  date: Date;
  slug: string;
  title: string;
  views?: number;
  content: string;
  subtitle?: string;
}

export interface ProjectSummary {
  id: number;
  title: string;
  dates: string;
  company: string;
  summary: string;
  logo?: string;
}
