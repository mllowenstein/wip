import { Component, signal, ViewChild } from '@angular/core';
import { SafeHtmlUtil } from '../../core/utils/safe-html.util';
import { BusinessCardComponent } from './business-card/business-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TOP_OF_ABOUT_ME } from '../../core/data/constants';
import { MatSidenav } from '@angular/material/sidenav';
import { SectionNav } from '../../core/data/schema';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mll-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @ViewChild('vcard') vcard!: BusinessCardComponent;
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  @ViewChild('nav') nav!: NavbarComponent;
  focusing = signal(TOP_OF_ABOUT_ME);
  sidebarVisible = signal(false);
  private highlightTimeout: any;

  constructor(
    public themes: ThemeService,
    public util: SafeHtmlUtil,
    private router: Router,
  ) { }

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

  onToggling(onoff: any): void {
    if (typeof onoff === 'boolean' && onoff && String(onoff.valueOf()) === 'false')
      this.themes.toggleTheme();
  }

  onScrolling(path: any): void {
    this.scrollTo(path);
  }

  toggleSidebar(): void {
    this.sidebarVisible.set(!this.sidebarVisible());
  }

  onExplore() {
    this.sidebarVisible.set(true);
  }

  onChangeFocus(event: any): void {
    this.focusing.set(event.value);
  }

  onNavigating(path: any): void {
    this.router.navigateByUrl(`/${path.toString()}`);
   }
}
