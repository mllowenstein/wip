import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MyOwnMaterialModule } from '../../core/material';
import { LandingPageRouting } from './landing-page.routing';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    LandingPageRouting,
  ]
})
export class LandingPageModule { }
