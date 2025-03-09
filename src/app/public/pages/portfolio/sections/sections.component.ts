import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../../core/material';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { SafeHtmlUtil } from '../../../../core/utils/safe-html.util';

@Component({
  selector: 'mll-sections',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, WorkExperienceComponent, SkillsComponent, EducationComponent],
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent {
  @Input() activated!: string;

  private highlightTimeout: any;

  constructor(public util: SafeHtmlUtil) { }
  // anchor-scrolling with stylistic effect

  public scrollTo(elementId: string): void {
    const focusElement = document.getElementById(elementId);
    focusElement?.scrollIntoView({behavior: 'smooth', block: 'start'});
    focusElement?.classList.add('highlight');
    clearTimeout(this.highlightTimeout);
    this.highlightTimeout = setTimeout(() => {
      focusElement?.classList.remove('highlight');
    }, 3000);
  }
}
