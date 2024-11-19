import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { DetalleFacultadComponent } from './facultad/detalle-facultad/detalle-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CrearFacultadComponent,
    ListarFacultadComponent,
    DetalleFacultadComponent,
    EditarFacultadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
