import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GreetingGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();
    const threeDays = 3 * 24 * 60 * 60 * 1000; // 3 days in ms

    if (!lastVisit || now - parseInt(lastVisit, 10) > threeDays) {
      localStorage.setItem('lastVisit', now.toString()); // Update visit time
      return true; // Show landing page
    }

    this.router.navigate(['/portfolio']);
    return false;
  }
}
