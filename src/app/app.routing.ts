import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GreetingGuard } from './core/guards/greeting.guard';
import { ErrorComponent } from './components/error/error.component';

export const ROUTE_ORDER = [
  'LandingPage',
  'Portfolio',
  'Dashboard',
  'Contact',
  'Auth',
  'Features'
];

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: [GreetingGuard]
  },
  { path: 'me', loadChildren: () => import('./debut/debut.module').then(m => m.DebutModule) },
  { path: 'portfolio', loadChildren: () => import('./components/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'admin/portfolio', loadChildren: () => import('./components/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'admin/dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'admin/contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'admin/features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRouting { }
