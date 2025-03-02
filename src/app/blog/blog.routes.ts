import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: '',
    data: { animation: 'BlogComponent' },
    loadComponent: () => import('./blog.component').then(comp => comp.BlogComponent)
  }, {
    path: ':slug',
    data: { animation: 'ArticleComponent' },
    loadComponent: () => import('./article/article.component').then(comp => comp.ArticleComponent)
  },
];
