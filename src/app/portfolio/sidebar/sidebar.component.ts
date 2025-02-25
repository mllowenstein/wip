import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
})
export class SidebarComponent {
  @Input() visible: boolean = false;
}
