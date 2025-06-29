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
  { path: '', redirectTo: '/me', pathMatch: 'full' },
  {
    path: 'me',
    loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./debut/debut.module').then(m => m.DebutModule),
  },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'admin/dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
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
