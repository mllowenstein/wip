import { Injectable } from '@angular/core';
import { BlogPost } from '../../core/data/schema';
import { SeedBlogPosts } from '../../core/data/constants';
import { ApiService } from '../../core/services/api.service';
import { Observable, of } from 'rxjs';
import { env } from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly BLOG_STORAGE_KEY = 'blog_posts';

  constructor(private api: ApiService) { }

  getAllBlogPosts(): Observable<BlogPost[]> {
    // return this.api.get(`${env.apiUrl}/blog/posts`);
    return of(SeedBlogPosts);
  }

  getABlogPost(frag: string): Observable<(BlogPost | null)[]> {
    let postResults: (BlogPost | null)[] = [];
    this.getAllBlogPosts().subscribe({
      next: (posts) => {
        const matching = posts.map((bp) => (bp.slug.includes(frag) || bp.subtitle!.includes(frag) || bp.title.includes(frag)) ? bp : null);
        postResults = matching.filter(match => match != null);
      },
      error: (err) => console.log(err),
      complete: () => console.log(postResults)
    });
    localStorage.setItem(this.BLOG_STORAGE_KEY, JSON.stringify(postResults))
    return of(postResults);
  }
}
