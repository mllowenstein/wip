import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], //, '../../../styles.scss'],
  imports: [CommonModule, MyOwnMaterialModule],
})
export class NavbarComponent {}

