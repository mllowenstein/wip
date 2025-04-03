import { Component } from '@angular/core';
import { WhoAmI } from '../../core/data/constants';
import { Engineer } from '../../core/data/schema';

@Component({
  selector: 'mll-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  me: Engineer = WhoAmI;
  showContacts = false;

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }


}
