import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MaisonsComponent } from './maisons/maisons.component';
import { TerrainComponent } from './terrains/terrain/terrain.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,

    TerrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
