import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis.component';

const routes: Routes = [
  { path: '', component: AnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AnalysisRouting { }