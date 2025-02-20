import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandingComponent } from './landing.component';

@Injectable({
  providedIn: 'root'
})
export class LandingGuard {
  private static readonly LAST_VISIT_KEY = 'lastVisit';
  private router = inject(Router);
  private dialog = inject(MatDialog);

  canActivate: CanActivateFn = () => {
    const lastVisit = localStorage.getItem(LandingGuard.LAST_VISIT_KEY);
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;

    if (!lastVisit || Number(lastVisit) < threeDaysAgo) {
      this.showLandingDialog();
      localStorage.setItem(LandingGuard.LAST_VISIT_KEY, Date.now().toString()); // Update visit date
    }

    return true; // Allow route activation
  };

  private showLandingDialog(): void {
    this.dialog.open(LandingComponent, {
      width: '600px',
      disableClose: true
    });
  }
}
