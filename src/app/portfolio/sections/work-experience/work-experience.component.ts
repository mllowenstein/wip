import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';

@Component({
  selector: 'mll-work-experience',
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
})
export class WorkExperienceComponent {
  @Input() visible: boolean = false;
}
