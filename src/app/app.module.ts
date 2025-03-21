import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MessageService } from 'primeng/api'; // PrimeNG Toast Service

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { blogFeature } from './public/pages/blog/store/blog.store';
import { loginFeature } from './auth/login/store/login.store';
import { BlogEffects } from './public/pages/blog/store/blog.effects';
import { LoginEffects } from './auth/login/store/login.effects';

// Environment
import { env } from '../env/env';

// App Component (Assuming there's an AppComponent)
import { AppComponent } from './app.component';

// Routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, // Add your components here
  ],
  imports: [
    BrowserAnimationsModule, // Required for animations
    HttpClientModule, // HTTP Client
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
    }), // Routing

    // NgRx Store
    StoreModule.forRoot({
      login: loginFeature.reducer,
      blog: blogFeature.reducer,
    }),
    EffectsModule.forRoot([LoginEffects, BlogEffects]),
  ],
  providers: [
    MessageService, // PrimeNG Toast Notifications
    provideFirebaseApp(() => initializeApp(env.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}