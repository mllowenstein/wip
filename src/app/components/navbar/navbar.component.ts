import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';
import { Route } from '@angular/router';

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  options?: any;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: NavRoute[] = [];
  menuOpen: boolean = false;
  navs: { path: string, display: string }[] = [
    { path: 'home', display: 'Home' },
    { path: 'about-us', display: 'About Us' },
    { path: 'areas-of-law', display: 'Areas Of Law' },
    { path: 'pricing', display: 'Pricing' },
    { path: 'blog', display: 'Blog' },
    { path: 'faq', display: 'FAQ' },
    { path: 'contact-us', display: 'Contact Us' },
  ]

  constructor() {}

  ngOnInit(): void {
    const currentUrl = window.location.pathname;
    routes.forEach((rt: Route) => {
      const navroute: NavRoute = {
        label: this.navs.find(nv => nv.path === rt.path)?.display ?? 'N/A',
        active: currentUrl.includes(rt.path!) ? true : false,
        path: rt.path,
      };
      if (navroute.label !== 'N/A' && !rt.redirectTo) this.links.push(navroute);
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  activate(path: string | undefined): void {
    const nowlink = this.links.find(lk => lk.path === path) || this.links[0];
    nowlink.active = true;
    this.links.forEach(lk => {
      if (lk.path !== path) lk.active = false;
    });
  }
}