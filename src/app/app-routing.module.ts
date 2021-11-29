import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import{ContactComponent} from"./contact/contact.component";
 import{HomeComponent} from"./home/home.component";
import { MaisonsComponent } from './maisons/maisons.component';
import { TerrainComponent } from './terrain/terrain.component';
const routes: Routes = [
 {path : 'about', component: AboutComponent  },
 { path:'contact', component: ContactComponent },
 { path:'home', component: HomeComponent },
 { path:'maison', component: MaisonsComponent },
 { path:'terrain', component: TerrainComponent },
 { path:'', component: HomeComponent },
 { path: 'maisons', loadChildren: () => import('./maisons/maisons.module').then(m => m.MaisonsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
