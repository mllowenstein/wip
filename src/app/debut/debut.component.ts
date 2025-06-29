import { Component, signal, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioSlugs, WhoAmI } from '../core/data/constants';
import { staggeredFadeIn } from '../app.animations';
import { Router } from '@angular/router';
import { Engineer } from '../core/data/schema';

@Component({
  selector: 'mll-debut',
  standalone: false,
  templateUrl: './debut.component.html',
  styleUrl: './debut.component.scss',
  animations: [staggeredFadeIn],
})
export class DebutComponent implements OnInit {
  availableSlugs: string[] = PortfolioSlugs;
  activeSection = signal<string>('aboutme');
  landingInView = signal<boolean>(false);
  showSidenav = signal<boolean>(false);
  isLoading = signal<boolean>(true);
  isMobile = signal<boolean>(false);
  me: Engineer = WhoAmI;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkViewport();

    setTimeout(() => this.isLoading.set(false), 500);
  }

  isActive(slug: string): boolean {
    return this.activeSection() === slug;
  }

  onInView(slug: string, inView: any): void {
    if (inView) this.setActiveSection(slug);
  }

  // Handle contact actions from sidenav
  onContactAction(contact: any): void {
    console.log('Contact action:', contact);
    // Additional custom logic if needed
  }

  // Handle section navigation from sidenav
  onSectionNavigation(sectionId: string): void {
    // Close sidenav on mobile after navigation
    if (window.innerWidth <= 768) {
      this.showSidenav.set(false);
    }

    // Your existing navigation logic
    this.setActiveSection(sectionId);
  }

  // Close sidenav on escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.showSidenav()) {
      this.showSidenav.set(false);
    }
  }

  // Close sidenav when clicking outside (optional)
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sidenavElement = document.querySelector('mll-sidenav');
    const menuButton = document.querySelector('.menu-toggle');

    if (this.showSidenav() &&
        sidenavElement &&
        !sidenavElement.contains(target) &&
        menuButton &&
        !menuButton.contains(target)) {
      this.showSidenav.set(false);
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkViewport();
  }

  private checkViewport(): void {
    const mobile = window.innerWidth <= 768;
    this.isMobile.set(mobile);

    // Auto-hide sidebar on mobile
    if (mobile) {
      this.showSidenav.set(false);
    }
  }

  // Navigation methods
  setActiveSection(sectionId: string): void {
    if (this.isValidSection(sectionId)) {
      this.activeSection.set(sectionId);
      this.scrollToSection(sectionId);
    }
  }

  isActiveSection(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  private isValidSection(sectionId: string): boolean {
    return this.availableSlugs.some(section => section === sectionId);
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  // Intersection Observer callback for section visibility
  onSectionInView(sectionId: string, isInView: any): void {
    if (isInView && this.isValidSection(sectionId)) {
      this.activeSection.set(sectionId);
    }
  }

  // Sidebar controls
  toggleSidebar(): void {
    this.showSidenav.set(!this.showSidenav());
  }

  closeSidebar(): void {
    this.showSidenav.set(false);
  }

  // Navigation
  navigateHome(): void {
    this.router.navigate(['/landing']);
  }

  // Utility methods
  getSectionLabel(sectionId: string): string {
    const section = this.availableSlugs.find(s => s === sectionId);
    return section || 'Whoops';
  }

  downloadResume(): void {
    window.open('/assets/Michael_Lowenstein_2025.pdf', '_blank', 'noopener,noreferrer');
  }

  getAvailableSections(): string[] {
    return this.availableSlugs.map(section => section);
  }
}
