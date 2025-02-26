import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MyOwnMaterialModule } from '../../../../core/material';

@Component({
  selector: 'mll-skeleton',
  standalone: true,
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  imports: [MyOwnMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonComponent  {
  @Input() width = '100%';
  @Input() height = '20px';
}
