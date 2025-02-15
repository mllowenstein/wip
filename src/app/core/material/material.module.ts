/*
 * This module imports and re-exports all Angular Material modules for convenience,
 * so only 1 module import is needed in your feature modules.
 * See https://material.angular.io/guide/getting-started#step-3-import-the-component-modules.
 *
 * To optimize your production builds, you should only import the components used in your app.
 */

import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import {
  MatCommonModule,
  MatLineModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPseudoCheckboxModule,
  MatRippleModule,
} from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { CdkModule } from './cdk.module';

@NgModule({
  imports: [
    CdkModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  exports: [
    CdkModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MyOwnMaterialModule {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer:DomSanitizer,
  ) {
    this.registerMiscIcons();
  }

  private registerMiscIcons(): void {
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      '404',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/404.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'angle-up-solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angle-up-solid.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'angle-down-solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angle-down-solid.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'cc-dicover',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cc-dicover.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'cc-mastercard',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cc-mastercard.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'cc-visa',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cc-visa.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'combined-shape',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/combined-shape.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'corporate',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/corporate.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'edit-v2',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit-v2.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'empty-cart',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/empty-cart.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'featured',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/featured.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'folder',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/folder.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'hammer-wrench',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/hammer-wrench.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'icon-entries',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-entries.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'levels',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/levels.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'locationIcon',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/locationIcon.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'mask',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mask.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'menu',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'placeholder',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/placeholder.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'question-circle',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/question-circle.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'settings',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'shield-check',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/shield-check.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'spinner',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/spinner.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'stock_general',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/stock_general.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'trophy',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/trophy.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'user-icon',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/user-icon.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'user',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'),
    );
  }
}
