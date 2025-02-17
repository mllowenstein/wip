import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app.routes';
import { Route } from '@angular/router';

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  options?: any;
}

@Component({
  selector: 'mll-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl:'./navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  links: NavRoute[] = [];
  menuOpen: boolean = false;
  navs: { path: string, display: string }[] = [
    { path: 'home', display: 'Home' },
    { path: 'about-me', display: 'About Me' },
    { path: 'blog', display: 'Blog' },
    { path: 'contact-me', display: 'Contact Me' },
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
