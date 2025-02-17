import { Component } from '@angular/core';
import * as schema from '../../../core/data/schema';

@Component({
  selector: 'mll-home',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  sections: schema.Section[] = [];
}
