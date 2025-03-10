import { CommonModule, NgIf } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MyOwnMaterialModule } from '../../../../core/material';
import { PowService } from './pow.service';

@Component({
  selector: 'mll-pow',
  standalone: true,
  imports: [CommonModule, NgIf, MyOwnMaterialModule, MatCardModule, MatButtonModule, MatProgressBarModule, MatDialogModule],
  templateUrl: './pow.component.html',
  styleUrl: './pow.component.scss'
})
export class PowComponent {
  private service = inject(PowService);

  // TODO
}
