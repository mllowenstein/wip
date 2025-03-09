import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules, withRouterConfig, withDebugTracing, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api'; // PrimeNG Toast Service
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { env } from '../env/env';
import { blogFeature } from './public/pages/blog/store/blog.store';

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
    provideFirebaseApp(() => initializeApp(env.firebase)),
    provideDatabase(() => getDatabase()),
    provideClientHydration(),
    provideHttpClient(withInterceptors([])), // HTTP Interceptors
    provideAnimationsAsync(), // Required for animations
    MessageService, // PrimeNG Toast Notifications
    // provideStore({ blog: blogFeature.reducer }),
    // provideEffects(BlogEffects),
  ]
};
