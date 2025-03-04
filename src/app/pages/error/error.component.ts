import { Component } from '@angular/core';
import { MyOwnMaterialModule } from '../../core/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mll-error',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

}
