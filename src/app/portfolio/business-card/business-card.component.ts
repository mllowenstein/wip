import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-business-card',
  standalone: true,
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
})
export class BusinessCardComponent {
  shrunk = signal(false);
  @Output() explore = new EventEmitter<void>();

  expand(): void {
    this.shrunk.set(true);
    this.explore.emit();
  }
}
