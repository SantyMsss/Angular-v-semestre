import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { DetalleFacultadComponent } from './facultad/detalle-facultad/detalle-facultad.component';

@NgModule({
  declarations: [
    AppComponent
    ListarFacultadComponent,
    DetalleFacultadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
