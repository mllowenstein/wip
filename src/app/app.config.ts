import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules, withRouterConfig, withDebugTracing, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api'; // PrimeNG Toast Service

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDebugTracing(), // Remove in production
      withComponentInputBinding(),
      withViewTransitions(),
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideClientHydration(),
    provideHttpClient(withInterceptors([])), // HTTP Interceptors
    provideAnimationsAsync(), // Required for animations
    MessageService // PrimeNG Toast Notifications
  ]
};
