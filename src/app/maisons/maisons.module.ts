import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaisonsRoutingModule } from './maisons-routing.module';
import { MaisonsComponent } from './maisons.component';
import { MaisonComponent } from './maison/maison.component';


@NgModule({
  declarations: [
    MaisonsComponent,
    MaisonComponent
  ],
  imports: [
    CommonModule,
    MaisonsRoutingModule
  ]
})
export class MaisonsModule { }
