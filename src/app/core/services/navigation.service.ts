import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];

  constructor(
    private location: Location,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
        this.broadcast();
      }
    });
  }

  navigateTo(path: string): void {
    console.log(path);
    this.router.navigateByUrl(`/${path}`);
  }

  getNavigationRoutes(): Route[] {
    return this.router.config
      .flatMap((route) => [route, ...(route.children || [])])
      .filter((route) => route.data?.['showInNavbar']);
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  broadcast(): void {
    console.log('session history...');
    console.log(this.history);
  }
}
