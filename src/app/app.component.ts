import { animation } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/layout/navbar';
import { ROUTE_ORDER } from './app.routes';
import { MyOwnMaterialModule } from './core/material';
import { routerSlideAnimation } from './core/ui/animations';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'mll-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyOwnMaterialModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routerSlideAnimation],
})
export class AppComponent {
  @ViewChild('navbar') private navbar!: NavbarComponent;
  directionInverse: string = '-100%'; // Backward by default
  direction: string = '100%'; // Forward by default
  title = 'wip';
  isLoading = false;

  constructor(private router: Router) {
    // Handle navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Show spinner on navigation start
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false; // Hide spinner on navigation end
      }
    });
  }

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
}
