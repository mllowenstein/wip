import { signal, Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SiteContent, Section, SectionNav, SiteModule, NavRoute } from '../../core/data/schema';
import { PortfolioNavs, PortfolioSlugs } from '../../core/data/constants';


@Component({
  selector: 'mll-topnav',
  standalone: false,
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavComponent {
  @Input() activeSection!: string;
  @Input() navigationItems: NavRoute[] = [];
  @Input() showHomeButton: boolean = true;
  @Input() homeButtonLabel: string = 'Home';
  @Input() isMobile: boolean = false;
  @Input() showSidenav: boolean = false;
  @Input() availableSlugs!: string[];

  @Output() sectionChange = new EventEmitter<string>();
  @Output() homeNavigation = new EventEmitter<void>();
  @Output() resumeDownload = new EventEmitter<void>();
  @Output() menuToggle = new EventEmitter<void>();

  @Input() active!: string;
  sitenavs: SectionNav[] = PortfolioNavs;

  changeSection(section: string): void {
    this.sectionChange.emit(section);
  }

  get navItems(): NavRoute[] {
    return this.navigationItems.length > 0 ? this.navigationItems : this.navItems;
  }

  onSectionChange(sectionId: string): void {
    if (this.isValidSection(sectionId)) {
      this.sectionChange.emit(sectionId);
    }
  }

  onHomeClick(): void {
    this.homeNavigation.emit();
  }

  onResumeClick(): void {
    this.resumeDownload.emit();
  }

  onMenuToggle(): void {
    this.menuToggle.emit();
  }

  isActiveSection(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  // Sidebar controls
  toggleSidebar(): void {
    this.showSidenav = !this.showSidenav;
  }

  closeSidebar(): void {
    this.showSidenav = false;
  }

  private isValidSection(sectionId: string): boolean {
    return this.navItems.some(item => item.label === sectionId);
  }

  // Accessibility helper
  getSectionAriaLabel(item: NavRoute): string {
    return `Navigate to ${item.label} section`;
  }
}
