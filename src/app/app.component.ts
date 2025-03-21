import { Component, inject, ViewChild } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { routerSlideAnimation } from './app.animations';
import { ROUTE_ORDER } from './app.routing';

@Component({
  selector: 'mll-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  animations: [routerSlideAnimation]
})
export class AppComponent {
  @ViewChild('navbar') private navbar!: NavbarComponent;
  directionInverse: string = '-100%'; // Backward by default
  direction: string = '100%'; // Forward by
  private router = inject(Router);
  isLoading = false;
  title = 'wip';

  prepareRoute(outlet: RouterOutlet): any {
    const fromState = outlet?.activatedRouteData?.['animation'] || '';
    const toState = this.router.routerState.snapshot.url || '';

    // Dynamically calculate the direction
    this.setDirection(fromState, toState);

    // Return the animation trigger with custom params
    return {
      value: outlet?.activatedRouteData?.['animation'] || null,
      params: {
        direction: this.direction,
        directionInverse: this.directionInverse,
      },
    };
  }

  private setDirection(fromState: string, toState: string): void {
    const fromIndex = ROUTE_ORDER.indexOf(fromState);
    const toIndex = ROUTE_ORDER.indexOf(toState);

    if (fromIndex < toIndex) {
      // Forward navigation
      this.direction = '-100%'; // Slide out to the left
      this.directionInverse = '100%'; // Slide in from the right
    } else {
      // Backward navigation
      this.direction = '100%'; // Slide out to the right
      this.directionInverse = '-100%'; // Slide in from the left
    }
  }

  onToggling(onoff: boolean): void {

  }


}
