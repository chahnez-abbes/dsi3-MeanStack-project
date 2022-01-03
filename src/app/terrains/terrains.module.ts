import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerrainsRoutingModule } from './terrains-routing.module';
import { TerrainsComponent } from './terrains.component';
import { ConsulterComponent } from '../maisons/consulter/consulter.component';


@NgModule({
  declarations: [
    TerrainsComponent,
    ConsulterComponent
  ],
  imports: [
    CommonModule,
    TerrainsRoutingModule
  ]
})
export class TerrainsModule { }
