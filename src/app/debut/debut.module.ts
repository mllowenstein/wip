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
import { DebutRouting } from './debut,routing';

@NgModule({
  declarations: [
    DebutComponent,
    SidenavComponent,
    TopnavComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DebutRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DebutModule { }
