import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyOwnMaterialModule } from '../core/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionsComponent } from './sections/sections.component';
import { BusinessCardComponent } from './business-card/business-card.component';

@Component({
  selector: 'mll-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule, BusinessCardComponent, SidebarComponent, SectionsComponent, RouterOutlet]
})
export class PortfolioComponent {
  sidebarVisible = signal(false);

  onExplore() {
    this.sidebarVisible.set(true);
  }
}
