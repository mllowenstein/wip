import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../env/env';

const contactApi = env.contact_api_url;

@Component({
  selector: 'mll-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private recaptcha: ReCaptchaV3Service,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(2)],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required, Validators.minLength(10)],
    });
  }

  submitForm(): void {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post(contactApi, this.contactForm).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent successfully';
        this.contactForm.reset();
      },
      error: () => {
        this.errorMessage = 'Something went wrong on my end... Please grab a copy of my resume and try again later. Thank you!';
      }
    }).add(() => {
      this.isSubmitting = false;
    });
  }
}
