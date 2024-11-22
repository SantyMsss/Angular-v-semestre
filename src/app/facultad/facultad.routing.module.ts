import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarFacultadComponent} from "./listar-facultad/listar-facultad.component";
import {CrearFacultadComponent} from "./crear-facultad/crear-facultad.component";
import {DetalleFacultadComponent} from "./detalle-facultad/detalle-facultad.component";
import {EditarFacultadComponent} from "./editar-facultad/editar-facultad.component";

const routes: Routes = [
  {
    path: '',
    component: ListarFacultadComponent
  },
  {
    path: 'listar',
    component: ListarFacultadComponent
  },
  {
    path: 'crear',
    component: CrearFacultadComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleFacultadComponent
  },
  {
    path: 'editar/:id',
    component: EditarFacultadComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadRoutingModule { }
