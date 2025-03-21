import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import { CloudRouting } from './cloud.routing';


@NgModule({
  declarations: [
    CloudComponent
  ],
  imports: [
    CommonModule,
    CloudRouting,
  ]
})
export class CloudModule { }
