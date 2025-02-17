import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { env } from '../../../env/env';

const defaultQuery: string = 'Custom Software Development 2025';
const perigonBaseUrl: string = env.perigon.baseApiUrl ?? 'https://api.goperigon.com/v1/all';
const perigonContentUrl: string = env.perigon.baseContentUrl ?? 'https://api.goperigon.com/v1/all?apiKey=41fe7898-8ec4-4480-9a62-c8347503c98a&q=Real%20Estate%20Legal%20in%20Canada';

interface BlogArticle {
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

interface BlogEntry {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  image: string;
  topics: string[];
}

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
  source: { name: string };
}

interface Feed {
  entries?: BlogEntry[];
  articles: Article[];
  numResults: number;
  status: number;
}

interface News {
  articles: Article[];
  date?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private setPerigonHeader(): HttpHeaders {
    return new HttpHeaders({
      'x-api-key': env.perigon.apiKey,
    });
  }

  private buildQueryString(query: string): string {
    return `apiKey=${env.perigon.apiKey}&q=${encodeURIComponent(query)}`;
  }

  fetchBlogContent(): Observable<Feed> {
    const perigonHeaders = this.setPerigonHeader();
    return this.http.get<Feed>(`${perigonContentUrl}`, { headers: perigonHeaders });
  }

  fetchFilteredContent(query: string): Observable<BlogArticle[]> {
    console.log(query);
    const perigonHeaders = this.setPerigonHeader();
    const qs = this.buildQueryString(query);
    return this.http.get<any[]>(`${perigonBaseUrl}?${qs}`, { headers: perigonHeaders });
  }

  fetchTrendingNews(): Observable<News> {
    const perigonHeaders = this.setPerigonHeader();
    const qs = this.buildQueryString(defaultQuery);
    return this.http.get<News>(`${perigonBaseUrl}?${qs}`, { headers: perigonHeaders });
  }
}
