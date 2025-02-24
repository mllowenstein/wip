import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { GridOptions } from 'ag-grid-community';
import { CustomCellRendererComponent } from './custom/custom-cell-renderer.component';
import { SkillMetric, EducationMetric } from '../../../data/schema';
import { SkillsMetrics } from '../../../data/constants';
import { AgGridModule } from 'ag-grid-angular';

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
  columnDefs = [
    { field: 'name', sortable: true, filter: true, visible: true },
    { field: 'group', sortable: false, filter: true, visible: false },
    { field: 'years', sortable: true, filter: true, visible: true },
    { field: 'rating', sortable: true, filter: true, visible: true },
    { field: 'badge', sortable: false, filter: false, visible: true },
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
    pagination: true,
    paginationPageSize: 10,
    domLayout: 'autoHeight',
    suppressContextMenu: true,
    columnMenu: 'new',
    enableBrowserTooltips: false,
    tooltipTrigger: 'hover',
    tooltipShowDelay: 500,
    tooltipHideDelay: 1500,
    headerHeight: 60,
    includeHiddenColumnsInAdvancedFilter: true,
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.gridOptions);
    console.log(this.rowData);
  }

  onGridReady(params: any): void {
    console.log(params);
    params.api.sizeColumnsToFit();
  }
}
