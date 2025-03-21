import { Component, Input, inject, signal, Output, OnInit, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';
import { FormField } from '../form.model';

@Component({
  selector: 'mll-base-form',
  standalone: false,
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
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
