import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebutComponent } from './debut.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { MyOwnMaterialModule } from '../core/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DebutRouting } from './debut.routing';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    DebutComponent,
    SidenavComponent,
    TopnavComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    MatIconModule,
    RecaptchaV3Module,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DebutRouting,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '<YOUR_RECAPTCHA_SITE_KEY></YOUR_RECAPTCHA_SITE_KEY>' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DebutModule { }
