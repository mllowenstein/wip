import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalService } from '../common/modal/modal.service';
import { MatDialogModule } from '@angular/material/dialog';l
import { Component, inject, OnInit } from '@angular/core';
import { MyOwnMaterialModule } from '../core/material';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'mll-public',
  standalone: true,
  imports: [CommonModule, RouterModule, MyOwnMaterialModule, MatDialogModule],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponentr implements OnInit {
  private modaler = inject(ModalService);

  ngOnInit(): void  {
    const hideMessage = localStorage.getItem('dontShowMe');
    if (hideMessage) {
      this.modaler.open(WelcomeComponent, {
        width: '400px',
      });
    }
  }
}
