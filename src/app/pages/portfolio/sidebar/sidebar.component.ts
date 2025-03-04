import { Component, Input , Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';
import { ABOUT_ME_NAVS } from '../../../core/data/constants';
import { SectionNav } from '../../../core/data/schema';

@Component({
  selector: 'mll-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], //, '../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule],
})
export class SidebarComponent {
  @Output() focusing = new EventEmitter<SectionNav>();
  @Input() visible: boolean = false;
  navs: SectionNav[] = ABOUT_ME_NAVS;

  activate(section: string): void {
    const nav = this.navs.find(n => n.value === section);
    this.focusing.emit(nav);
  }
}
