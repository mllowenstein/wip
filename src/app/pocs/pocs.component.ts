import { Component } from '@angular/core';
import { MyOwnMaterialModule } from '../core/material';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mll-pocs',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatTabsModule],
  templateUrl: './pocs.component.html',
  styleUrl: './pocs.component.scss'
})
export class PocsComponent {

}
