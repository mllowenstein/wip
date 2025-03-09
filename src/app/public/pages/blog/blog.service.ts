import { Injectable } from '@angular/core';
import { BlogPost } from '../../../core/data/schema';
import { Database, ref, set, get, child, push, remove, update } from '@angular/fire/database';
import { SeedBlogPosts } from '../../../core/data/constants';
import { ApiService } from '../../../core/services/api.service';
import { from, map, Observable, of } from 'rxjs';
import { env } from '../../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly BLOG_STORAGE_KEY = 'blogposts';

  constructor(
    private api: ApiService,
    private db: Database,
  ) { }

  getAllBlogPosts(): Observable<BlogPost[]> {
    // return of(SeedBlogPosts);
    const dbRef = ref(this.db, this.BLOG_STORAGE_KEY);
    return from(get(dbRef)).pipe(
      map(snapshot => {
        if (!snapshot.exists()) return [];
        return Object.values(snapshot.val()) as BlogPost[];
      })
    );
  }

  getABlogPost(slug: string): Observable<BlogPost | null> {
    const dbRef = ref(this.db, this.BLOG_STORAGE_KEY);
    return from(get(dbRef)).pipe(
      map(snapshot => {
        if (!snapshot.exists()) return null;
        const posts = Object.values(snapshot.val()) as BlogPost[];
        return posts.find(post => post.slug === slug) ||  null;
      })
    );
  }

  addBlogPost(post: BlogPost): Observable<void> {
    const newPostRef = push(ref(this.db, this.BLOG_STORAGE_KEY));
    const postId = newPostRef.key || '';
    return from(set(newPostRef, { ...post, id: postId }));
  }

  updateBlogPost(id: number, updatedData: Partial<BlogPost>): Observable<void> {
    const postRef = ref(this.db, `${this.BLOG_STORAGE_KEY}/${id}`);
    return from(update(postRef, updatedData));
  }

  deleteBlogPost(id: number): Observable<void> {
    const postRef = ref(this.db, `${this.BLOG_STORAGE_KEY}/${id}`);
    return from(remove(postRef));
  }

  // getABlogPost(frag: string): Observable<(BlogPost | null)[]> {
  //   let postResults: (BlogPost | null)[] = [];
  //   this.getAllBlogPosts().subscribe({
  //     next: (posts) => {
  //       const matching = posts.map((bp) => (bp.slug.includes(frag) || bp.subtitle!.includes(frag) || bp.title.includes(frag)) ? bp : null);
  //       postResults = matching.filter(match => match != null);
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => console.log(postResults)
  //   });
  //   localStorage.setItem(this.BLOG_STORAGE_KEY, JSON.stringify(postResults))
  //   return of(postResults);
  // }
}
