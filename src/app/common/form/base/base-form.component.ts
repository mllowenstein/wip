import { Component, Input, inject, signal, Output, OnInit, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { FormService } from '../form.service';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormField } from '../form.model';

@Component({
  selector: 'mll-base-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnMaterialModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
  providers: [FormService]
})
export class BaseFormComponent implements OnInit {
  @Output() submitting = new EventEmitter<any>();
  form = signal<{ [key: string]: any }>({});
  private service = inject(FormService);
  @Input() fields: FormField[] = [];

  ngOnInit(): void {
    this.form.set(this.service.generateForm(this.fields));
  }

  handleFileUpload(event: Event, key: string): void {
    const file = (event.target as HTMLInputElement).files![0] || null;
    this.form.update(data => ({ ...data, [key]: file }));
  }

  submit(): void {
    console.log('Submitting form now...');
    this.submitting.emit(this.form())
  }
}
