import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, SpinnerComponent, ComingSoonComponent],
  exports: [NavbarComponent, SpinnerComponent, ComingSoonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedComponentsModule { }
