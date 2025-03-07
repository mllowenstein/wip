import { Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseModalComponent } from './base/base-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal = inject(MatDialog);


  constructor() { }

  open<T>(component: T, data?: any): MatDialogRef<BaseModalComponent, T> {
    return this.modal.open(BaseModalComponent, {
      width: '60%',
      hasBackdrop: true,
      disableClose: false,
      data,
    });
  }
