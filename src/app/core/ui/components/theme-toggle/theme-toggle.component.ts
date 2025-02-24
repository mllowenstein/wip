import { Component, WritableSignal, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'mll-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  public darkMode: WritableSignal<boolean> = signal(false);

  constructor(private themeService: ThemeService) { }

  toggleTheme(): void {
    // const newDarkMode = !this.darkMode();
    // this.darkMode.set(newDarkMode);
    // this.themeService.setTheme(newDarkMode ? 'dark' : 'light');
    this.themeService.toggleDarkMode(document.body.classList.contains('dark-theme'));
  }
}
