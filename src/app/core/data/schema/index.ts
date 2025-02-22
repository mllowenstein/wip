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
  rating: number;
  name: string;
  id?: number;
}

export interface EducationMetric {
  extracurriculars?: string;
  alternative?: boolean;
  institution: string;
  year_i?: number;
  year_f?: number;
  degree: string;
  years: string;
  field: string;
}
