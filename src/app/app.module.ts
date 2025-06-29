import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import {
  crypto0xbtc,
  cryptoAda,
  cryptoBat,
  cryptoBch,
  cryptoBtc,
  cryptoDoge,
  cryptoEnj,
  cryptoEos,
  cryptoEtc,
  cryptoEth,
  cryptoFil,
  cryptoIcp,
  cryptoIcx,
  cryptoKsm,
  cryptoLtc,
  cryptoLun,
  cryptoMkr,
  cryptoMatic,
  cryptoMnx,
  cryptoNeo,
  cryptoRvn,
} from '@ng-icons/cryptocurrency-icons';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { env } from '../env/env';
import { MyOwnMaterialModule } from './core/material';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { ThemeService } from './core/services/theme.service';
import { FirebaseService } from './core/services/firebase.service';
import { LoadingService } from './core/services/loading.service';
import { MonitoringService } from './core/services/monitoring.service';
import { NavigationService } from './core/services/navigation.service';
import { ReleaseService } from './core/services/release.service';
import { ResponsiveService } from './core/services/responsive.service';
import { ShortcutService } from './core/services/shortcut.service';
import { SiteService } from './core/services/site.service';
import { UtilityService } from './core/services/utility.service';
import { ApiService } from './core/services/api.service';
import { ErrorService } from './core/services/error.service';
import { GlobalErrorHandler } from './core/handlers/global-error.handler';
import { NavbarModule } from './shared/navbar/navbar.module';
import { ErrorComponent } from './components/error/error.component';
import { CardComponent } from './shared/card/card.component';
import { NotificationModule } from './shared/notification/notification.module';
import { ModalModule } from './shared/modal/modal.module';
import { FormModule } from './shared/form/form.module';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

const watchlist = env.crypto.watchlist;

const matchWatchlistToIcon = (
  watchlist: string[],
  iconDict: { key: string; value: any }
): string => {
  let mapping: any = {};
  watchlist.forEach(coin => {
    if (coin === iconDict.key) mapping[coin] = iconDict.value;
  });
  console.log(mapping);
  return `${mapping}`;
};

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    CardComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module,
    BrowserAnimationsModule,
    MyOwnMaterialModule,
    NgIconsModule.withIcons({
      crypto0xbtc,
      cryptoAda,
      cryptoBat,
      cryptoBch,
      cryptoBtc,
      cryptoDoge,
      cryptoEnj,
      cryptoEos,
      cryptoEtc,
      cryptoEth,
      cryptoFil,
      cryptoIcp,
      cryptoIcx,
      cryptoKsm,
      cryptoLtc,
      cryptoLun,
      cryptoMkr,
      cryptoMatic,
      cryptoMnx,
      cryptoNeo,
      cryptoRvn,
    }),
    HttpClientModule,
    NotificationModule,
    ModalModule,
    FormModule,
    NavbarModule,
    AppRouting,
  ],
  providers: [
    ApiService,
    ErrorService,
    FirebaseService,
    LoadingService,
    MonitoringService,
    NavigationService,
    ReleaseService,
    ResponsiveService,
    ShortcutService,
    SiteService,
    ThemeService,
    UtilityService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    // Development warning about deprecated components
    if (!env.production) {
      console.warn(`
        🚨 PORTFOLIO REFACTOR NOTICE 🚨

        The following components are DEPRECATED and will be removed:
        - PortfolioComponent (replaced by DebutComponent)
        - BusinessCardComponent (functionality moved to LandingComponent)
        - SidebarComponent (replaced by TopnavComponent)
        - SidenavComponent (no longer needed)

        Migration completed:
        ✅ LandingComponent - Refactored as entry point
        ✅ DebutComponent - Now main portfolio page
        ✅ TopnavComponent - Simplified navigation
        ✅ Routing - Updated to use new structure

        Next steps:
        1. Remove deprecated components
        2. Clean up unused styles
        3. Update any remaining references
      `);
    }
  }
}
