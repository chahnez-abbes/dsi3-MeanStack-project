import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainComponent } from './terrain/terrain.component';
import { TerrainsComponent } from './terrains.component';

const routes: Routes = [{ path: '', component: TerrainsComponent },
{ path: ':id', component: TerrainComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainsRoutingModule { }
