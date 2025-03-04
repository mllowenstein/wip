import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectSummary, SkillMetric } from '../../core/data/schema';
import { ProjectsList, SkillsMetrics } from '../../core/data/constants';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'mll-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatDialogModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('hoverScale', [
      transition(':enter, :hover', [
        animate('0.3s ease-in-out', style({ transform: 'scale(1.1)' }))
      ])
    ])
  ]
})
export class FeatureComponent {
  hovered: number | null = null;
  skills: SkillMetric[] = SkillsMetrics;
  projects: ProjectSummary[] = ProjectsList;
}
