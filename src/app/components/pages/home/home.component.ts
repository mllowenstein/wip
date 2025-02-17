import { Component, OnInit } from '@angular/core';
import * as schema from '../../../core/data/schema';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { HOME } from '../../../core/data/constants';
import { SiteService } from '../../../core/services/site.service';
import { MyOwnMaterialModule } from '../../../core/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mll-home',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  site!: schema.SiteContent;

  constructor(sites: SiteService, public util: SafeHtmlUtil) {}

  async ngOnInit(): Promise<void> {
    await this.getPageContent();
  }

  async getPageContent(): Promise<schema.SiteContent | null> {
    this.site = HOME;
    // TODO
    return null;
  }
}
