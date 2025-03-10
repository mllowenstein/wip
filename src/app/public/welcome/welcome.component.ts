import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'mll-welcome',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  private dialogRef = inject(MatDialogRef<WelcomeComponent>);
  dontRemindMe: boolean = false;

  close(): void {
    if (this.dontRemindMe) {
      localStorage.setItem('hideWelcomeModal', 'true');
    }
    this.dialogRef.close();
  }
}
