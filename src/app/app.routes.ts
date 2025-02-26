import { Routes } from '@angular/router';
import { LandingGuard } from './support/landing/landing.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: '*' } },
  {
    path: 'portfolio',
    canActivate: [LandingGuard],
    data: { animation: 'PortfolioComponent' },
    loadComponent: () => import('./portfolio/portfolio.component').then(comp => comp.PortfolioComponent)
  },
];
