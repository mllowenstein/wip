import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SiteSection, SectionNav, SiteContent, SkillMetric, EducationMetric } from '../../../core/data/schema';
import { SiteService } from '../../../core/services/site.service';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { ABOUT_ME, ABOUT_ME_SECTIONS } from '../../../core/data/constants';
import { GridComponent } from '../../../core/ui/components/grid/grid.component';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import * as animate from '../../../core/ui/animations';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TimelineEvent } from '../../../core/ui/components/timeline/timeline.component';


@Component({
  selector: 'mll-about-me',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatButtonModule, MatDialogModule, GridComponent, ModalComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  providers: [MessageService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutMeComponent {
  stockPrices: any[] = [];
  sections$!: Promise<SiteSection[]>;
  private highlightTimeout: any;
  navs: SectionNav[] = ABOUT_ME_SECTIONS;
  showDialog: boolean = false;
  gridView: boolean = true;
  priceAction: any[] = [];
  displayedSkills: any[] = [];
  timelineEvents: TimelineEvent[] = [
    { year: '2015', title: 'Title 1', description: 'Freelancing for National Neon Ltd.', accentColor: '#41516C' },
    { year: '2016', title: 'Title 2', description: 'SIA Wealth Management', accentColor: '#FBCA3E' },
    { year: '2017', title: 'Title 3', description: 'Peloton Computer Enterprises', accentColor: '#E24A68' },
    { year: '2021', title: 'Title 4', description: 'FullStack Labs', accentColor: '#1B5F8C' },
    { year: '2024', title: 'Title 5', description: 'NCAL Engineering', accentColor: '#FBCA3E' },
    { year: '2024', title: 'Title 6', description: 'House Analytics', accentColor: '#4CADAD' },
  ];

  [x: string]: any;
  site!: SiteContent;

  constructor(
    sites: SiteService,
    public util: SafeHtmlUtil,
    private dialog: MatDialog,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getPageContent();
  }

  async getPageContent(): Promise<void> {
    // this.site = await this.sites.fetchMyDetails();
    this.site = ABOUT_ME;
  }

  // anchor-scrolling with stylistic effect
  public scrollTo(elementId: string): void {
    const focusElement = document.getElementById(elementId);
    focusElement?.scrollIntoView({behavior: 'smooth', block: 'start'});
    focusElement?.classList.add('highlight');
    clearTimeout(this.highlightTimeout);
    this.highlightTimeout = setTimeout(() => {
      focusElement?.classList.remove('highlight');
    }, 3000);
  }

  wrapped(text: string): any {
    return text.split(';');
  }

  openModal(now: boolean): void {
    this.showDialog = now;
  }

  updateSkills(event: any): void {
    this.displayedSkills = event;
    console.log(this.displayedSkills);
  }
}
