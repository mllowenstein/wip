import { Injectable } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../core/data/schema';
import { env } from '../../../env/env';

const blogApi: string = env.blog_api_url;

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postViewSubject = new Subject<string>();

  constructor(private http: HttpClient) {
    this.postViewSubject.pipe(debounceTime(2000)).subscribe((postId) => {
      this.http.post(`${blogApi}/${postId}/increment-view`, {}).subscribe();
    });
  }

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(blogApi);
  }

  getPost(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${blogApi}/${id}`);
  }

  trackView(postId: string): void {
    this.postViewSubject.next(postId);
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(blogApi, post);
  }

  updatePost(id: string, post: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${blogApi}/${id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${blogApi}/${id}`);
  }
}
