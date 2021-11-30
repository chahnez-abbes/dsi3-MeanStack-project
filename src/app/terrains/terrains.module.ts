import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerrainsRoutingModule } from './terrains-routing.module';
import { TerrainsComponent } from './terrains.component';


@NgModule({
  declarations: [
    TerrainsComponent
  ],
  imports: [
    CommonModule,
    TerrainsRoutingModule
  ]
})
export class TerrainsModule { }
