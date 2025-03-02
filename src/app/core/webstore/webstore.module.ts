import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW, PREFIX } from './tokens';
import { WebStoreConfig } from './models';

@NgModule({
  imports: [CommonModule],
})
export class WebStoreModule {
  static forRoot(
    config: WebStoreConfig,
  ): ModuleWithProviders<WebStoreModule> {
    return {
      ngModule: WebStoreModule,
      providers: [
        {
          provide: WINDOW,
          useFactory: () => window,
        },
        {
          provide: PREFIX,
          useValue: config.prefix || '',
        },
      ],
    };
  }
}
