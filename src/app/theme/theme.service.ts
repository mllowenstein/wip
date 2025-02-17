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
  }
}

