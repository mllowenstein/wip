import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MyOwnMaterialModule } from '../../../core/material';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from '../../../core/data/schema';

@Component({
  selector: 'mll-article',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  postId = signal<number | null>(null);
  post = signal<any>(null);
  article!: BlogPost | null;
  errorMessage: string = '';

  constructor(private blogger: BlogService) {
    this.route.params.subscribe(params => {
      this.postId.set(+params['slug']);
    });
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug)
      this.blogger.getABlogPost(slug).subscribe({
        next: (articles) => this.article = articles[0],
        error: (err) => this.errorMessage = `We ran into a problem trying to find that article (${slug})  - ${err}`,
        complete: () => console.log('Enjoy reading the article!')
      });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }
}
