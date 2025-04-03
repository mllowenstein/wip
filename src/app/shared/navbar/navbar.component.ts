import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NAV_LINKS, PAGE_LINKS } from '../../core/data/constants';
import { NavRoute, PageRoute } from '../../core/data/schema';
import { AuthService } from '../../auth/auth.service';
import { NotificationService } from '../notification/notification.service';
import { Route, Router } from '@angular/router';
import { routes } from '../../app.routing';

const ASSETPATH = '../../../assets/docs/profile.jpg';

@Component({
  selector: 'mll-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../../styles.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggling = new EventEmitter<boolean>(false);
  @Output() navigating = new EventEmitter<string>();
  @Output() scrolling = new EventEmitter<string>();
  pagelinks: PageRoute[] = PAGE_LINKS;
  navlinks: NavRoute[] = NAV_LINKS;
  assetpath: string = ASSETPATH;
  menuOpen: boolean = false;
  links: NavRoute[] = [];
  navs: { path: string, display: string }[] = [
    { path: 'me', display: 'Who Am I?' },
    { path: 'portfolio', display: 'Portfolio' },
    { path: 'dashboard', display: 'Dashboards' },
    { path: 'contact', display: 'Contact Me' },
  ];

  constructor(
    private notifier: NotificationService,
    private auth: AuthService,
    private router: Router,
  ) {
  }

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

  userIsAuthenticated(): boolean {
    return this.auth.isAuthenticated();
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

  scroll(path: string | undefined): void {
    this.activate(path);
    this.scrolling.emit(path);
  }

  navigate(path: string | undefined): void {
    this.activate(path);
    this.navigating.emit(path);
  }
}
