import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../core/material';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { routerSlideAnimation } from '../core/ui/animations';
import { Observable } from 'rxjs';
import { LoadingService } from '../core/services/loading.service';
import { FeatureComponent } from '../support/feature/feature.component';

@Component({
  selector: 'mll-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyOwnMaterialModule, NavbarComponent, FeatureComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  animations: [routerSlideAnimation]
})
export class LayoutComponent {
  loading$: Observable<boolean> = this.loadingService.loading$;
  directionInverse: string = '-100%'; // Backward by default
  direction: string = '100%'; // Forward by default
  isLoading = false;
  title = 'wip';

  constructor(
    private loadingService: LoadingService,
    private router: Router
  ) {
    // Handle navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loadingService.hide();
      }
    });
  }

  prepareRoute(outlet: RouterOutlet): any {
    // Return the animation trigger with custom params
    return {
      value: outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] || null,
      params: {
        direction: this.direction,
        directionInverse: this.directionInverse,
      },
    };
  }
}
