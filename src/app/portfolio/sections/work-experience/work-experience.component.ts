import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';
import { TableComponent } from '../../../core/ui/components/table/table.component';

@Component({
  selector: 'mll-work-experience',
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'], //../../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule, TableComponent],
})
export class WorkExperienceComponent  implements OnInit {
  @ViewChild('eventstable') eventstable!: TableComponent;
  @Input() activated: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
