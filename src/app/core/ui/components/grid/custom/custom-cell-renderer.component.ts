import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../../material';

@Component({
  selector: 'mll-custom-cell-renderer',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  template: `
    <span style="color: {{color}};">
      {{ value }}
    </span>
  `,
})
export class CustomCellRendererComponent implements ICellRendererAngularComp {
  value: any;
  color: string = 'black';

  agInit(params: any): void {
    this.value = params.value;
    this.color = params.value > 0 ? 'green' : 'yellow';
  }

  refresh(params: any): boolean {
    this.value = params.value;
    this.color = params.value > 0 ? 'green' : 'yellow';
    return true;
  }
}
