import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from './core/material';
import { SpinnerComponent } from './support/spinner/spinner.component';
import { LayoutComponent } from './layout/layout.component';
import { LoadingService } from './core/services/loading.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { Observable } from 'rxjs';

@Component({
  selector: 'mll-root',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, LayoutComponent, SpinnerComponent, HttpClientModule, MatProgressBarModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    LoadingService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'wip';

  sidebarVisible = signal(false);

  onExplore(): void {
    this.sidebarVisible.set(true);
  }
}
