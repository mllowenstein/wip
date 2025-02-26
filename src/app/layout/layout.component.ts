import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../core/material';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'mll-layout',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, NavbarComponent, PortfolioComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LayoutComponent {

}
