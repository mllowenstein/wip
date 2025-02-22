import { Component, OnInit } from '@angular/core';
import * as schema from '../../../core/data/schema';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { HOME } from '../../../core/data/constants';
import { SiteService } from '../../../core/services/site.service';
import { MyOwnMaterialModule } from '../../../core/material';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LandingComponent } from '../../dialogs/landing/landing.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'mll-home',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatDialogModule, MatTooltipModule, MatRippleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  quickmessage: string = "Don't forget to grab a copy of my resume` before you go!";
  [x: string]: any;
  site!: schema.SiteContent;

  constructor(
    sites: SiteService,
    public util: SafeHtmlUtil,
    private dialog: MatDialog,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getPageContent().then((site) => {
      if (site)
        this.showLandingDialog();
    });
  }

  async getPageContent(): Promise<schema.SiteContent | null> {
    this.site = HOME;
    // TODO
    return null;
  }

  showLandingDialog(): void {
    const lastVisit = Number(localStorage.getItem('lastvisit')) ?? new Date(
      new Date().setDate(new Date().getDate() - 4)
    ).getTime();
    const now = new Date().getTime();

    if (now - lastVisit > 3 * 24 * 60 * 60 * 1000) {
      this.dialog.open(LandingComponent, {
        disableClose: false,
        hasBackdrop: true
      });
      localStorage.setItem('lastvisit', now.toString());
    }
  }

  downloadResume(): void {
    window.open('assets/docs/MichaelLowenstein_Resume.pdf', '_blank');
  }
}
