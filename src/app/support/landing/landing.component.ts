import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as schema from '../../core/data/schema';

@Component({
  selector: 'mll-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  sections: schema.SiteSection[] = [];

  constructor(private dialogRef: MatDialogRef<LandingComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
