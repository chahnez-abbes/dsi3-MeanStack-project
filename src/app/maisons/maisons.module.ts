import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaisonsRoutingModule } from './maisons-routing.module';
import { MaisonsComponent } from './maisons.component';


@NgModule({
  declarations: [
    MaisonsComponent,
  
  ],
  imports: [
    CommonModule,
    MaisonsRoutingModule
  ]
})
export class MaisonsModule { }
