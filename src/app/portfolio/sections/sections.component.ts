import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'mll-sections',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, WorkExperienceComponent, SkillsComponent, InterestsComponent, ContactComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
})
export class SectionsComponent {
  private highlightTimeout: any;

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
