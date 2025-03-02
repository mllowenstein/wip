import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';
import { GridComponent } from '../../../core/ui/components/grid/grid.component';

@Component({
  selector: 'mll-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule, GridComponent],
})
export class SkillsComponent {
  @Input() visible: boolean = false;
}
