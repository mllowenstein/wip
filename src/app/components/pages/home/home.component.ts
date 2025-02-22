import { Component, OnInit } from '@angular/core';
import * as schema from '../../../core/data/schema';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { HOME } from '../../../core/data/constants';
import { SiteService } from '../../../core/services/site.service';
import { MyOwnMaterialModule } from '../../../core/material';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { LandingComponent } from '../../dialogs/landing/landing.component';

@Component({
  selector: 'mll-home',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatRippleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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
}
