import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaisonComponent } from './maison/maison.component';
import { MaisonsComponent } from './maisons.component';

const routes: Routes = [
  { path: '', component: MaisonsComponent },
  { path: ':id', component: MaisonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaisonsRoutingModule { }
