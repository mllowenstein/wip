import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';
import { Route, RouterModule, RouterLink } from '@angular/router';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatRippleModule } from '@angular/material/core';

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  ready: boolean;
}

@Component({
  selector: 'mll-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MyOwnMaterialModule, MatRippleModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent implements OnInit {
  links: NavRoute[] = [];
  menuOpen: boolean = false;
  navs: { path: string, display: string, ready: boolean }[] = [
    { path: 'home', display: 'Home', ready: true },
    { path: 'about-me', display: 'About Me', ready: false },
    { path: 'contact-me', display: 'Contact Me', ready: false },
  ]

  constructor() {}

  ngOnInit(): void {
    const currentUrl = window.location.pathname;
    routes.forEach((rt: Route) => {
      const navroute: NavRoute = {
        label: this.navs.find(nv => nv.path === rt.path)?.display ?? 'N/A',
        active: currentUrl.includes(rt.path!) ? true : false,
        path: rt.path,
        ready: this.navs.find(nv => nv.path === rt.path)?.ready ?? false
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
