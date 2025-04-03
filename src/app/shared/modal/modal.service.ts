import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseModalComponent } from './base/base-modal.component';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private route: ActivatedRoute,
    private modal: MatDialog,
    private router: Router,
  ) { }

  open<T>(component: T, data?: any): MatDialogRef<BaseModalComponent, T> {
    return this.modal.open(BaseModalComponent, {
      width: '60%',
      hasBackdrop: true,
      disableClose: false,
      data: {
        ...data,
        component,
      },
    });
  }

  openRoutedModal(modalId: string): void {
    this.router.navigate(['/modal', modalId]);
  }
}
