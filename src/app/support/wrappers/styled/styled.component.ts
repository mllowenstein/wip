import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { mountReactComponent } from '../react-wrapper.component';
import { MyOwnMaterialModule } from '../../../core/material';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'mll-styled',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatDialogModule],
  templateUrl: './styled.component.html',
  styleUrl: './styled.component.scss'
})
export class StyledComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const container = this.elementRef.nativeElement.querySelector('#styled');
    mountReactComponent(container);
  }
}
