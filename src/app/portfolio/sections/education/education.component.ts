import { Component } from '@angular/core';
import { MyOwnMaterialModule } from '../../../core/material';
import { CommonModule } from '@angular/common';
import { EducationMetric } from '../../../core/data/schema';
import { EducationMetrics } from '../../../core/data/constants';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';

@Component({
  selector: 'mll-education',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  metrics: EducationMetric[] = EducationMetrics;

  constructor(public util: SafeHtmlUtil) { }
}
