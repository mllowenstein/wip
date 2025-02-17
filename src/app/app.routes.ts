import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactMeComponent } from './components/pages/contact-me/contact-me.component';

export const ROUTE_ORDER = [
  'HomePage',
  'AboutMePage',
  'BlogPage',,
  'ContactMePage'
];

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: '*' } },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about-me', component: AboutMeComponent, data: { animation: 'AboutMePage' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
  { path: 'contact-me', component: ContactMeComponent, data: { animation: 'ContactMePage' } },
];
