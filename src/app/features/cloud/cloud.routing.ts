import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud.component';

const routes: Routes = [
  { path: '', component: CloudComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CloudRouting { }