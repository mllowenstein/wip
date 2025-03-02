import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { RouterModule, Route } from '@angular/router';

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  options?: any;
}

@Component({
  selector: 'mll-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], //, '../../../'],
  imports: [CommonModule, RouterModule, MyOwnMaterialModule],
})
export class NavbarComponent {
  links: NavRoute[] = [];
  menuOpen: boolean = false;
  navs: { path: string, display: string }[] = [
    { path: 'portfolio', display: 'Portfolio' },
    { path: 'blog', display: 'Blog' },
    { path: 'contact', display: 'Contact Me' },
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
      if (navroute.label !== 'N/A' && !rt.redirectTo && !rt.path?.includes(':slug')) this.links.push(navroute);
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

  launchPoCs(): void {
    console.log('coming soon...');
  }
}

