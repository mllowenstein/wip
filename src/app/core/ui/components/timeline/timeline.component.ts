import { Component, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AnimationService } from '../../animations/animation.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MyOwnMaterialModule } from '../../../material';

@Component({
  selector: 'mll-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  imports: [CommonModule, BrowserModule, MyOwnMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AnimationService],
  animations: [new AnimationService().slideInLeft]
})
export class TimelineComponent {
  @Output() jobHovered = new EventEmitter<any>();

  jobs = [
    { title: 'Software Engineer', company: 'Google', year: '2020 - 2023', skills: [
        { skill: 'Angular', level: 'Advanced' },
        { skill: 'TypeScript', level: 'Expert' },
        { skill: 'Node.js', level: 'Intermediate' }
      ]
    },
    { title: 'Frontend Developer', company: 'Microsoft', year: '2017 - 2020', skills: [
        { skill: 'React', level: 'Expert' },
        { skill: 'CSS', level: 'Advanced' },
        { skill: 'JavaScript', level: 'Expert' }
      ]
    }
  ];

  onHover(job: any): void {
    this.jobHovered.emit(job.skills);
  }
}
