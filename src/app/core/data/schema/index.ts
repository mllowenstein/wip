// reusable initerfaces & dataabase mapping
export interface BlogArticle {
  addDate: string;
  articleId: string;
  authorsByLine: string;
  categories: {name: string}[];
  claim: string;
  clusterId: string;
  companies: {name: string}[];
  content: string;
  country: string;
  description: string;
  entities: {data: string, type: string, mentions: number}[];
  imageUrl: string;
  keywords: {name: string, weight: number}[];
  labels: {name: string}[];
  language: string;
  links: string[];
  locations: {country: string}[];
  matchedAuthors: {id: string, name: string}[];
  medium: string;
  people: {name: string}[];
  places: string[];
  pubDate: string;
  refreshDate: string;
  reprint: boolean;
  reprintGroupId: string;
  score: number;
  sentiment: {positive: number, negative: number, neutral: number};
  source: {domain: string, locations: {country: string, state: string, city: string, coordinates: {lat: number, long: number}}};
  summary: string;
  title: string;
  topics: {name: string}[];
  translatedDescription?: string;
  translatedSummary?: string;
  translatedTitle?: string;
  translation?: string;
  url: string;
  verdict?: string;
}

export interface BlogEntry {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  image: string;
  topics: string[];
}

export interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
  source: { name: string };
}

export interface Feed {
  entries?: BlogEntry[];
  articles: BlogArticle[];
  numResults: number;
  status: number;
}

export interface News {
  articles: Article[];
  date?: Date;
}

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

export interface Profile {
  id: string;
  image: any;
  name: string;
  role?: string;
  education?: string;
  calltobar?:  string;
  workexperience?: string;
  achievements?: string[];
  community?: string[];
}

export interface ProfileNav {
  display: string;
  value: string;
  order: number;
}
