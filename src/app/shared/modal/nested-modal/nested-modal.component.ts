import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: false,
  selector: 'mll-nested-modal',
  templateUrl: './nested-modal.component.html',
  styleUrls: ['./nested-modal.component.scss'],
})
export class NestedModalComponent {
  constructor(private dialog: MatDialog) {}

  openNextDialog(): void {
    this.dialog.open(NestedModalComponent, {
      width: '400px'
    });
  }
}
