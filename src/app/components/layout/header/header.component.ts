import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mll-header',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileView: boolean = this.isBrowser() && window.innerWidth <= 768;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.isBrowser()) {
      this.isMobileView = (event.target as Window).innerWidth <= 768;
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  scrollToSummary(): void {
    window.location.hash = 'summary';
    this.viewportScroller.scrollToAnchor('summary');
  }
}
