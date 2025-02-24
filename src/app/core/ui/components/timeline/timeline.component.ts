import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  accentColor: string;
}

@Component({
  selector: 'mll-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() events: TimelineEvent[] = [];
}
