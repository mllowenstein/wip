import { Component, OnInit } from '@angular/core';
import { MyOwnMaterialModule } from '../../../core/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import * as schema from '../../../core/data/schema';

@Component({
  selector: 'mll-contact-me',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatRippleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {



  downloadResume(): void {
    window.open('assets/docs/MichaelLowenstein_Resume.pdf', '_blank');
  }
}
