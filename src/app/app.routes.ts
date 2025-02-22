import { Routes } from '@angular/router';
import { LandingGuard } from './components/dialogs/landing/landing.guard';

export const ROUTE_ORDER = [
  'HomePage',
  'AboutMePage',
  'ContactMePage'
];

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: '*' } },
  { path: 'home', canActivate: [LandingGuard], data: { animation: 'HomePage' }, loadComponent: () => import('./components/pages/home/home.component').then(comp => comp.HomeComponent) },
  { path: 'about-me', data: { animation: 'AboutMePage' }, loadComponent: () => import('./components/pages/about-me/about-me.component').then(comp => comp.AboutMeComponent) },
  { path: 'contact-me', data: { animation: 'ContactMePage' }, loadComponent: () => import('./components/pages/contact-me/contact-me.component').then(comp => comp.ContactMeComponent) },
];
