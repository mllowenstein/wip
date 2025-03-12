import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { animation: '*' } },

  {
    path: 'login',
    data: { animation: 'Login' },
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'public/portfolio',
    data: { animation: 'Portfolio' },
    loadComponent: () => import('./public/pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  {
    path: 'public/blog',
    data: { animation: 'Blog' },
    loadComponent: () => import('./public/pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'public/blog/:slug',
    data: { animation: 'Article' },
    loadComponent: () => import('./public/pages/blog/article/article.component').then(m => m.ArticleComponent)
  },
  {
    path: 'public/contact',
    data: { animation: 'Contact' },
    loadComponent: () => import('./public/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    data: { animation: 'Error' },
    loadComponent: () => import('./public/pages/error/error.component').then(m => m.ErrorComponent)
  },
  {
    path: 'members',
    canActivate: [AuthGuard],
    data: { animation: 'Members' },
    loadComponent: () => import('./members/members.component').then(m => m.MembersComponent)
  },
  {
    path: 'members/pocs',
    data: { animation: 'PoCs' },
    loadComponent: () => import('./members/pages/pocs/pocs.component').then(m => m.PocsComponent)
  },
];
