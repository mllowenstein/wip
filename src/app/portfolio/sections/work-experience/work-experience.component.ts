import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';

@Component({
  selector: 'mll-work-experience',
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss', '../../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule],
})
export class WorkExperienceComponent {
  @Input() visible: boolean = false;
}
