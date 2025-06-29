import { Component, OnInit, HostListener, ChangeDetectionStrategy, signal } from '@angular/core';
import { ContactMethod, Education, Engineer, Experience } from '../../core/data/schema';
import { Router } from '@angular/router';
import { resumeUrl, WhoAmI } from '../../core/data/constants';

@Component({
  selector: 'mll-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  isMobile = signal<boolean>(false);
  scrolled = signal<boolean>(false);
  myresume: string = resumeUrl;
  whoami: Engineer = WhoAmI;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkViewport();
  }

  // Optional: React to window resize to switch layout modes
  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  private checkViewport(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }

  // Optional: Track scroll for animation, navbar transparency, etc.
  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  navigateToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  callPhone(): void {
    window.location.href = `tel:${WhoAmI.contact.mobile.at}`;
  }

  sendEmail(): void {
    window.location.href = `mailto:${WhoAmI.contact.email.at}`;
  }

  openLinkedIn(): void {
    window.open(WhoAmI.contact.linkedin.at, '_blank', 'noopener,noreferrer');
  }

  downloadResume(): void {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  }
}
