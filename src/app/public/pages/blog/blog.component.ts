import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../../core/data/schema';
import { BlogService } from './blog.service';
import { catchError, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { routerSlideAnimation } from '../../../core/ui/animations';
import { LoadingService } from '../../../core/services/loading.service';
import { LazyLoadDirective } from '../../../core/ui/directives/lazy-load.directive';
import { generateUUID } from 'three/src/math/MathUtils';

@Component({
  selector: 'mll-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MyOwnMaterialModule, MatDialogModule, LazyLoadDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  animations: [routerSlideAnimation],
  providers: [BlogService],
})
export class BlogComponent implements OnInit {
  loading$: Observable<boolean> = this.loadingService.loading$;
  blogposts = signal<(BlogPost | null)[]>([]);
  private router = inject(Router);
  errorMessage = signal('');
  searchQuery = signal('');
  filteredPosts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    this.blogposts().filter(post =>
      post!.slug.toLowerCase().includes(query) ||
      post!.title.toLowerCase().includes(query) ||
      post!.content.toLowerCase().includes(query) ||
      (post!.subtitle ? post!.subtitle!.toLowerCase().includes(query) : false)
    )
  });

  constructor(
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private blogger: BlogService,
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.blogger.getAllBlogPosts().subscribe({
      next: (articles) => {
        console.log(articles);
        this.blogposts.set(articles);
      },
      error: (err) => this.errorMessage.set(`We ran into a problem trying to find our feed - ${err}`),
      complete: () => {
        this.loadingService.hide();
        console.log('Enjoy reading the article!');
      }
    });
  }

  viewPost(slug: string): void {
    console.log(slug);
    this.router.navigateByUrl(`/blog/${slug}`);
  }

  createNewPost(): void {
    const newPost: BlogPost = {
      id: '1',
      title: 'New Post',
      slug: `${generateUUID().toLowerCase()}`,
      subtitle: 'Subtitle here...',
      content: 'Write something amazing...',
      date: new Date(new Date().toISOString().split('T')[0]),
    };
    this.blogposts.update((posts: any) => [newPost, ...posts]);
  }

  editPost(id: string, event: any) {
    event.stopPropogation();
    console.log('Coming Soon: Edit Blog Post...');
  }

  deletePost(id: string, event: any) {
    event.stopPropogation();
    console.log('Coming Soon: Delete Blog Post...');
  }

  onScroll(event: any) {
    console.log('Scroll event:', event);
    // Could implement lazy loading or infinite scrolling here
  }
}
