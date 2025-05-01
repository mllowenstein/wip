import { Component, signal } from '@angular/core';
import { PortfolioSlugs } from '../core/data/constants';
import { staggeredFadeIn } from '../app.animations';

@Component({
  selector: 'mll-debut',
  standalone: false,
  templateUrl: './debut.component.html',
  styleUrl: './debut.component.scss',
  animations: [staggeredFadeIn],
})
export class DebutComponent {
  availableSlugs: string[] = PortfolioSlugs;
  activeSection = signal<string>('aboutme');
  landingInView = signal<boolean>(false);

  setActiveSection(slug: string): void {
    if (this.availableSlugs.includes(slug))
      this.activeSection.set(slug);
  }

  isActive(slug: string): boolean {
    return this.activeSection() === slug;
  }

  onInView(slug: string, inView: any): void {
    if (inView) this.setActiveSection(slug);
  }
}
