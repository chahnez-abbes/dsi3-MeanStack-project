import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterComponent } from './consulter/consulter.component';
import { MaisonComponent } from './maison/maison.component';
import { MaisonsComponent } from './maisons.component';

const routes: Routes = [
  { path: '', component: MaisonsComponent },
  { path: ':id', component: MaisonComponent },
  { path: 'consulter', component: ConsulterComponent },
  
{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  
  ]
})
export class MaisonsRoutingModule { }
