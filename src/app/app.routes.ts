import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full', data: { animation: '*' } },
  {
    path: 'portfolio',
    data: { animation: 'Portfolio' },
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  {
    path: 'blog',
    data: { animation: 'Blog' },
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:slug',
    data: { animation: 'Article' },
    loadComponent: () => import('./pages/blog/article/article.component').then(m => m.ArticleComponent)
  },
  {
    path: 'contact',
    data: { animation: 'Contact' },
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'pocs',
    data: { animation: 'PoCs' },
    loadComponent: () => import('./pages/pocs/pocs.component').then(m => m.PocsComponent)
  },
  {
    path: '**',
    data: { animation: 'Error' },
    loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent)
  },
];
