import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/analysis', pathMatch: 'full' },
  {
    path: 'analysis',
    canActivate: [AuthGuard],
    loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule),
    // loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  {
    path: 'blog',
    canActivate: [AuthGuard],
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    // loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  {
    path: 'cloud',
    canActivate: [AuthGuard],
    loadChildren: () => import('./cloud/cloud.module').then(m => m.CloudModule),
    // loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  {
    path: 'messaging',
    canActivate: [AuthGuard],
    loadChildren: () => import('./messaging/messaging.module').then(m => m.MessagingModule),
    // loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class FeaturesRouting { }