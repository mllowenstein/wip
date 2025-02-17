import { Component } from '@angular/core';
import * as schema from '../../../core/data/schema';
import { SiteService } from '../../../core/services/site.service';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { ABOUT_ME_SECTIONS } from '../../../core/data/constants';

@Component({
  selector: 'mll-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  sections$!: Promise<schema.Section[]>;
  private highlightTimeout: any;
  navs: schema.SectionNav[] = ABOUT_ME_SECTIONS;
  sections:  schema.SectionNav[] = [];

  constructor(private siteService: SiteService, public util: SafeHtmlUtil) {}

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

  ngOnInit(): void {
    // this.sections$ = this.siteService.getTeamProfiles();
    this.sections = ABOUT_ME_SECTIONS;
    console.log(this.sections);
  }

  wrapped(text: string): any {
    return text.split(';');
  }
}
