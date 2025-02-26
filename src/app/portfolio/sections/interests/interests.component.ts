import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';

@Component({
  selector: 'mll-interests',
  standalone: true,
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss', '../../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule],
})
export class InterestsComponent {
  @Input() visible: boolean = false;
}
