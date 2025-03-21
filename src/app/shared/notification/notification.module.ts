import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    MyOwnMaterialModule
  ],
  providers: [NotificationService]
})
export class NotificationModule { }