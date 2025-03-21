import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { MessagingRouting } from './messaging.routing';


@NgModule({
  declarations: [
    MessagingComponent
  ],
  imports: [
    CommonModule,
    MessagingRouting
  ]
})
export class MessagingModule { }
