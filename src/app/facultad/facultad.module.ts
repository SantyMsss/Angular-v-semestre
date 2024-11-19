import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarFacultadComponent } from './listar-facultad/listar-facultad.component';
import { CrearFacultadComponent } from './crear-facultad/crear-facultad.component';
import { DetalleFacultadComponent } from './detalle-facultad/detalle-facultad.component';
import {FacultadRoutingModule} from "./facultad.routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { EditarFacultadComponent } from './editar-facultad/editar-facultad.component';




@NgModule({
  declarations: [
    ListarFacultadComponent,
    CrearFacultadComponent,
    DetalleFacultadComponent,
    EditarFacultadComponent,
  ],
  exports: [
    ListarFacultadComponent
  ],
  imports: [
    CommonModule,
    FacultadRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacultadModule { }
