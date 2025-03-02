import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../material'
import { TimelineEvent } from '../../../data/schema';

@Component({
  selector: 'mll-timeline',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() events: TimelineEvent[] = [];
  @Output() eventHovered = new EventEmitter<number | null>();

  onHover(eventId: number | null): void {
    this.eventHovered.emit(eventId);
  }
}
