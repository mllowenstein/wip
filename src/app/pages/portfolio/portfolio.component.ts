import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionsComponent } from './sections/sections.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TOP_OF_ABOUT_ME } from '../../core/data/constants';
import { SectionNav } from '../../core/data/schema';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'mll-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'], //, '../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule, BusinessCardComponent, SidebarComponent, SectionsComponent, MatSidenavModule]
})
export class PortfolioComponent {
  focusing = signal(TOP_OF_ABOUT_ME);
  sidebarVisible = signal(false);

  toggleSidebar(): void {
    this.sidebarVisible.set(!this.sidebarVisible());
  }

  onExplore() {
    this.sidebarVisible.set(true);
  }

  onChangeFocus(event: SectionNav): void {
    this.focusing.set(event.value);
  }
}
