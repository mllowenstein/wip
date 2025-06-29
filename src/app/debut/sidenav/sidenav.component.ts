import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WhoAmI } from '../../core/data/constants';
import { ContactMethod, Engineer } from '../../core/data/schema';

@Component({
  selector: 'mll-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Input() isMobile!: boolean;
  @Input() visible: boolean = false;
  @Input() availableSlugs!: string[];
  @Input() whoami: Engineer = WhoAmI;
  @Input() showSidenav: boolean = false;
  @Output() sectionChange = new EventEmitter<string>();
  @Input() profileImagePath: string = 'assets/profile.png';
  @Output() contactToggle = new EventEmitter<void>();
  @Output() contactAction = new EventEmitter<ContactMethod>();
  @Output() sectionNavigation = new EventEmitter<string>();

  showContacts = signal<boolean>(false);

  get contacts(): ContactMethod[] {
    return this.whoami.contacts;
  }

  changeSection(section: string, withNav?: boolean): void {
    this.sectionChange.emit(section);
    if (withNav) this.closeSidebar();
  }

  toggleContacts(): void {
    this.showContacts.set(!this.showContacts());
    this.contactToggle.emit();
  }

  handleContactAction(contact: ContactMethod): void {
    this.contactAction.emit(contact);
    // Default actions
    console.log(contact);
  }

  navigateToSection(sectionId: string): void {
    this.sectionNavigation.emit(sectionId);
  }

  downloadResume(): void {
    window.open('/assets/Michael_Lowenstein_2025.pdf', '_blank', 'noopener,noreferrer');
  }

  // Sidebar controls
  toggleSidebar(): void {
    this.showSidenav = !this.showSidenav;
  }

  closeSidebar(): void {
    this.showSidenav = false;
  }
}
