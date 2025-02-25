import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';

@Component({
  selector: 'mll-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
})
export class ContactComponent {
  @Input() visible: boolean = false;
}
