import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './carousel';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { UploaderComponent } from './uploader/uploader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, ThemeToggleComponent, UploaderComponent],
  exports: [CarouselComponent, ThemeToggleComponent, UploaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class FeatureComponentsModule { }
