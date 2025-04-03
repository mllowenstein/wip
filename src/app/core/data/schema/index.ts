// reusable initerfaces & dataabase mapping
import * as ENUMS from './enums';
import { ContactType } from './enums';

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

export const Enums = ENUMS;

export interface ChatMessage {
  user: string;
  message: string;
  timestamp: number;
}

export interface EventData {
  type: ENUMS.EventType;
  payload?: any;
}

export interface PageRoute {
  anchor: string;
  label: string;
  options?: any;
}

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  options?: any;
}

export interface SiteModule {
  name: string;
  title: string;
  summary: string;
  subinfo: string;
  icon?: string;
  lastUpdated?: Date;
  public: boolean;
  contents: string[];
  options?: object;
}

export interface ContactMethod {
  type: ContactType;
  label: string;
  at: string;
}

export interface Engineer {
  name: string;
  title: string;
  opentowork?: boolean;
  opentofeedback?: boolean;
  contacts: ContactMethod[];
}
