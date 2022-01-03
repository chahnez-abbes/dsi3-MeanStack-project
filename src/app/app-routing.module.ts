import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
 import{HomeComponent} from"./home/home.component";
import { MaisonsComponent } from './maisons/maisons.component';
import { TerrainComponent } from './terrains/terrain/terrain.component';
import { TerrainsComponent } from './terrains/terrains.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ConsulterComponent } from './terrains/consulter/consulter.component';

const routes: Routes = [
 { path:'home', component: HomeComponent },
 { path:'maison', component: MaisonsComponent },
 { path:'terrain', component: TerrainsComponent },
 { path:'', component: HomeComponent },
 { path:'consultert', component: ConsulterComponent },
 
 { path: 'maisons', loadChildren: () => import('./maisons/maisons.module').then(m => m.MaisonsModule) },
 { path: 'terrains', loadChildren: () => import('./terrains/terrains.module').then(m => m.TerrainsModule) },
 
 { path: 'about', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
