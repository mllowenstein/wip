import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SiteContent, Section, SectionNav, SiteModule } from '../../core/data/schema';
import { PortfolioNavs, PortfolioSlugs } from '../../core/data/constants';

@Component({
  selector: 'mll-topnav',
  standalone: false,
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {
  @Output() sectionChange = new EventEmitter<string>();
  @Input() active!: string;
  sitenavs: SectionNav[] = PortfolioNavs;



// export interface SectionNav {
//   display: string;
//   value: string;
//   order: number;
// }

// export interface Section {
//   label: string;
//   id: number;
//   options: object;
//   route?: string;
// }

  changeSection(section: string): void {
    this.sectionChange.emit(section);
  }
}
