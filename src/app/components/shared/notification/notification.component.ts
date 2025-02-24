import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from 'primeng/api';
import { MyOwnMaterialModule } from '../../../core/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mll-notification',
  standalone: true,
  styleUrl: './notification.component.scss',
  template: './notification.component.html',
  imports: [CommonModule, MyOwnMaterialModule, MatButtonModule]
})
export class MakeUpComponent {
  saraIsHere: boolean = false;

  constructor(private messenger: MessageService) {
  }

  showSuccess(message: string): void {
    this.messenger.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showError(message: string): void {
    this.messenger.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }


  showInfo(message: string): void {
    this.messenger.add({
      severity: 'info',
      summary: 'View Info',
      detail: message,
    });
  }
}
