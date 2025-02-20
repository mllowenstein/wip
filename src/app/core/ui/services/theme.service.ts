import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(DOCUMENT)private document: Document) {
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.toggleDarkMode(theme == 'dark' ? true : false);
  }

  toggleDarkMode(isDark: boolean): void {
    this.document.documentElement.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  loadTheme(): void {
    const theme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }
}

/**
 * import { ThemeService } from './core/ui/services/theme.service';

const themeService = new ThemeService();
themeService.loadTheme();
 */
