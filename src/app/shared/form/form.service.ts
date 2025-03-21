import { Injectable, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private fb = inject(FormBuilder);

  constructor() { }

  generateForm(fields: any[]): FormGroup {
    const group: any = {};
    fields.forEach(field => {
      group[field.name] = [field.value || '', field.required ? Validators.required : []];
    });
    return this.fb.group(group);
  }
}
