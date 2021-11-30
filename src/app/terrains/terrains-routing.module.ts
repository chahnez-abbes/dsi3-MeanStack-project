import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainsComponent } from './terrains.component';

const routes: Routes = [{ path: '', component: TerrainsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainsRoutingModule { }
