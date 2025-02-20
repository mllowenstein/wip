import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { routerAnimations } from '../../core/ui/animations';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { NavbarComponent } from './navbar';

@Component({
  selector: 'mll-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyOwnMaterialModule, NavbarComponent, FooterComponent, SharedComponentsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [routerAnimations]
})
export class LayoutComponent {

  getAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation']
  }
 }
