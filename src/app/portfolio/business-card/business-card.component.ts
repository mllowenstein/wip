import { Component, EventEmitter, Output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-business-card',
  standalone: true,
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss', '../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule],
})
export class BusinessCardComponent implements OnInit {
  stats = ['9 years of professional experience', 'Comfortable with the entire stack', 'Independent Contracting, Lead Engineer on both Frontend & Backend Teams'];
  shrunk = signal(false);
  currentStat = signal(0);
  autoRotate = signal(true);
  @Output() explore = new EventEmitter<void>();

  ngOnInit(): void {
    setInterval(() => {
      if (this.autoRotate()) {
        this.nextStat();
      }
    }, 3000);
  }

  nextStat(): void {
    this.currentStat.set((this.currentStat() + 1) % this.stats.length);
  }

  expand(): void {
    this.shrunk.set(true);
    this.explore.emit();
  }
}
