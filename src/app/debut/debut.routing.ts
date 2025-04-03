import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DebutComponent } from './debut.component';

const routes: Routes = [
  { path: '', component: DebutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DebutRouting { }
