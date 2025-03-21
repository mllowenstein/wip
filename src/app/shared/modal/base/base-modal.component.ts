import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../modal.service';

@Component({
  standalone: false,
  selector: 'mll-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss',
})
export class BaseModalComponent {

  constructor(
    private dialogRef: MatDialogRef<BaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ModalService
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
