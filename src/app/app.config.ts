import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules, withRouterConfig, withDebugTracing, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api';  // Service for Toast Messages

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDebugTracing(),
      withComponentInputBinding(),
      withViewTransitions(),
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideClientHydration(),
    provideHttpClient(withInterceptors([])), // Required for PrimeNG components using HTTP
    provideAnimationsAsync(),  // Required for animations in PrimeNG
    MessageService  // PrimeNG Service for Toast Notifications
  ]
};
