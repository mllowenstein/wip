import { Component } from '@angular/core';
import { fadeInOut } from '../../app.animations';

@Component({
  selector: 'mll-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations: [fadeInOut],
})
export class LandingPageComponent {
}
