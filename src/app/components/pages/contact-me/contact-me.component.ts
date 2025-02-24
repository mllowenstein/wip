import { Component, OnInit } from '@angular/core';
import { MyOwnMaterialModule } from '../../../core/material';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import * as schema from '../../../core/data/schema';
import { CONTACT_ME } from '../../../core/data/constants';
import { SiteService } from '../../../core/services/site.service';
import { SafeHtmlUtil } from '../../../core/utils/safe-html.util';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'mll-contact-me',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatRippleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  providers: [MessageService],
})
export class ContactMeComponent {
  submitted: boolean = false;
  contactMessage!: FormControl;
  contactForm!: FormGroup;

  [x: string]: any;
  site!: schema.SiteContent;

  constructor(
    fb: FormBuilder,
    sites: SiteService,
    public util: SafeHtmlUtil,
    private dialog: MatDialog,
    private messenger: MessageService,
  ) {
    this.contactForm = fb.group({
      firstname: [new FormControl('')],
      lastname: [new FormControl('')],
      email: [new FormControl(''), [Validators.required, Validators.email]],
      comments: [new FormControl('')],
    })
  }

  async ngOnInit(): Promise<void> {
    await this.getPageContent().then((site) => {
      console.log(CONTACT_ME);
    });
  }

  async getPageContent(): Promise<schema.SiteContent | null> {
    this.site = CONTACT_ME;
    return null;
  }

  processContactForm(): void {
    console.log(this.contactForm);
    this.submitted = true;
    if (this.contactForm.valid) {
      this.messenger.add({ severity: 'success', summary: 'Message Sent!', detail: 'Your message has been sent successfully.' });
      this.contactForm.reset();
      this.submitted = true;
    } else {
      this.messenger.add({ severity: 'error', summary: 'Validation Error Occurred...!', detail: 'Please check that all required fields have been filled out..' });
    }
  }

  downloadResume(): void {
    window.open('assets/docs/MichaelLowenstein_Resume.pdf', '_blank');
    this.processContactForm();
  }
}
