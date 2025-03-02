import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../material';
import { TimelineEvent } from '../../../data/schema';

@Component({
  selector: 'mll-table',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() events: TimelineEvent[] = [];
  @Input() highlightedEventIds: number[] = [];
}
