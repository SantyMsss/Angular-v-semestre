import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadRoutingModule } from './facultad-routing.module';
import { ListarFacultadesComponent } from './listar-facultad/listar-facultad.component';
import { CrearFacultadComponent } from './crear-facultad/crear-facultad.component';
import { DetalleFacultadComponent } from './detalle-facultad/detalle-facultad.component';
import { EditarFacultadComponent } from './editar-facultad/editar-facultad.component';
import {provideHttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DetalleFacultadComponent,
    ListarFacultadesComponent,
    CrearFacultadComponent,
    EditarFacultadComponent
  ],
  imports: [
    CommonModule,
    FacultadRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class FacultadModule { }
