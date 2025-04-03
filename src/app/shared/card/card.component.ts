import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'mll-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() flipping = new EventEmitter<boolean>(false);
  flipped = signal<boolean>(false);
  @Input() record!: any;

  flipMeOver(): void {
    this.flipped.set(!this.flipped());
    this.flipping.emit(true);
  }

  asPercent(rating: number): string {
    return (isNaN(rating) || rating < 1 || rating > 100) ? 'N/A' : `${rating}%`;
  }
}
