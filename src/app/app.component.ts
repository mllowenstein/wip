import { Component, signal, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from './core/material';
import { routerSlideAnimation } from './core/ui/animations';
import { SpinnerComponent } from './support/spinner/spinner.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'mll-root',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, LayoutComponent, SpinnerComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  animations: [routerSlideAnimation],
})
export class AppComponent {
  directionInverse: string = '-100%'; // Backward by default
  direction: string = '100%'; // Forward by default
  title = 'wip';
  isLoading = false;

  constructor(
    private router: Router
  ) {
    // Handle navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Show spinner on navigation start
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false; // Hide spinner on navigation end
      }
    });
  }

  sidebarVisible = signal(false);

  onExplore(): void {
    this.sidebarVisible.set(true);
  }

  prepareRoute(outlet: RouterOutlet): any {
    // Return the animation trigger with custom params
    return {
      value: outlet?.activatedRouteData?.['animation'] || null,
      params: {
        direction: this.direction,
        directionInverse: this.directionInverse,
      },
    };
  }
}
