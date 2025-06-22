import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MyOwnMaterialModule } from '../../core/material';
import { LandingRouting } from './landing.routing';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    LandingRouting,
  ]
})
export class LandingModule { }
