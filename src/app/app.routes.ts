import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full', data: { animation: '*' } },
  {
    path: 'portfolio',
    data: { animation: 'Portfolio' },
    loadComponent: () => import('./public/pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  {
    path: 'blog',
    data: { animation: 'Blog' },
    loadComponent: () => import('./public/pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:slug',
    data: { animation: 'Article' },
    loadComponent: () => import('./public/pages/blog/article/article.component').then(m => m.ArticleComponent)
  },
  {
    path: 'contact',
    data: { animation: 'Contact' },
    loadComponent: () => import('./public/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    data: { animation: 'Error' },
    loadComponent: () => import('./public/pages/error/error.component').then(m => m.ErrorComponent)
  },
  {
    path: 'auth',
    data: { animation: 'Auth' },
    loadComponent: () => import('./members/pages/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'pocs',
    data: { animation: 'PoCs' },
    loadComponent: () => import('./members/pages/pocs/pocs.component').then(m => m.PocsComponent)
  },
];
