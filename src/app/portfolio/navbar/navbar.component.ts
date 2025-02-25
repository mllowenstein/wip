import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
})
export class NavbarComponent {}

