import { Component, Inject, inject } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mll-base-modal',
  imports: [CommonModule, MyOwnMaterialModule, MatDialogModule],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss',
  providers: [ModalService],
  animations: []
})
export class BaseModalComponent {
  private dialogRef = inject(MatDialogRef<BaseModalComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { })

  close(): void {
    this.dialogRef.close();
  }
}
