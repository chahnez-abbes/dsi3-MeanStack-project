import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainComponent } from './terrain/terrain.component';
import { TerrainsComponent } from './terrains.component';
import { AddmaisonComponent } from './addmaison/addmaison.component';
import { ConsulterComponent } from './consulter/consulter.component';

const routes: Routes = [{ path: '', component: TerrainsComponent },
{ path: ':id', component: TerrainComponent },
{ path: 'consulter', component: ConsulterComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    AddmaisonComponent,
   
  ]
})
export class TerrainsRoutingModule { }
