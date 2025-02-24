import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomCellRendererComponent } from './custom/custom-cell-renderer.component';
import { SkillMetric, EducationMetric } from '../../../data/schema';
import { SkillsMetrics } from '../../../data/constants';
import { AgGridModule, AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  createGrid
} from 'ag-grid-community';

export interface IRow {
  name: string;
  group: string[];
  rating: number;
  years: number;
  comments: string;
  badge: any;
}
@Component({
  selector: 'mll-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  imports: [CommonModule, MyOwnMaterialModule, AgGridModule, MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatProgressBarModule, MatSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class GridComponent implements OnInit {
  myeducation: EducationMetric[] = [];
  myskills: SkillMetric[] = SkillsMetrics;
  columnDefs: ColDef[] = [
    { field: 'name', headerName: 'Skill', sortable: true, filter: true, hide: false },
    { field: 'group', headerName: 'Skill', sortable: false, filter: true, hide: true },
    { field: 'years', headerName: 'Years of Experience', sortable: true, filter: true, hide: false },
    { field: 'rating', headerName: 'Level', sortable: true, filter: true, hide: false, cellRenderer: this.progressBarRenderer },
    { field: 'badge', headerName: 'Responsibility', sortable: false, filter: false, hide: false, cellRenderer: this.badgeRenderer },
  ];
  rowData = this.myskills.map(sm => {
    return {
      name: sm.name,
      group: sm.group,
      years: sm.years,
      rating: sm.rating,
      badge: sm.years * sm.rating,
      comments: sm.comments ?? null,
    }
  });
  defaultColDef = {
    floatingFilter: true,
    resizable: true,
    sortable: true,
    filter: true,
  };
  frameworkComponents = {
    customCellRenderer: CustomCellRendererComponent,
  };
  gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    suppressContextMenu: true,
    columnMenu: 'new',
    enableBrowserTooltips: false,
    tooltipTrigger: 'hover',
    tooltipShowDelay: 500,
    tooltipHideDelay: 1500,
    headerHeight: 60,
    columnHoverHighlight: true,
    suppressRowHoverHighlight: true,
    includeHiddenColumnsInAdvancedFilter: true,
  };
  gridApi!: GridApi;

  constructor() { }

  ngOnInit(): void {
    console.log(this.gridOptions);
    console.log(this.rowData);
  }

  progressBarRenderer(params: any): any {
    return `
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${params.value}%" aria-valuenow="${params.value}" aria-valuemin="0" aria-valuemax="100">
          ${params.value}
        </div>
      </div>
    `;
  }

  badgeRenderer(params: any): any {
    console.log(params);
    const levelMap: { [key: string]: number } = {
      'Junior': 49,
      'Junior/Intermediate': 50,
      'Intermediate': 60,
      'Intermediate/Senior': 70,
      'Senior': 80,
      'Expert': 90
    };
    for (const level in levelMap) {
      if (params.data.rating >= levelMap[level]) {
        console.log(levelMap[level]);
      }
    }
  }

  onGridReady(params: any): void {
    console.log(params);
    params.api.sizeColumnsToFit();
    params.api.sizeColumnsToA
  }
}
