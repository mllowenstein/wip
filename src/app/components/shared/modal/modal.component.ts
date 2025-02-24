import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../../core/material';

@Component({
  selector: 'mll-modal',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ModalComponent {
  @Input() message: string = '';
  @Input() visible: boolean = false;
  @Input() header: string = 'Generic Reusable Modal';
  @Output() onClose = new EventEmitter<void>();

  closeDialog(): void {
    this.onClose.emit();
  }
}
