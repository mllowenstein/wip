import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { PortfolioSlugs } from '../core/data/constants';

@Component({
  selector: 'mll-debut',
  standalone: false,
  templateUrl: './debut.component.html',
  styleUrl: './debut.component.scss'
})
export class DebutComponent {
  availableSlugs: string[] = PortfolioSlugs;
  activeSection = signal<string>('aboutme');

  setActiveSection(slug: string): void {
    if (this.availableSlugs.includes(slug))
      this.activeSection.set(slug);
  }

  isActive(slug: string): boolean {
    return this.activeSection() === slug
  }
}
