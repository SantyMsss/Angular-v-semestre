import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarfacultadsComponent} from "./listar-facultads/listar-facultads.component";
import {CrearfacultadComponent} from "./crear-facultad/crear-facultad.component";
import {DetallefacultadComponent} from "./detalle-facultad/detalle-facultad.component";
import {EditarfacultadComponent} from "./editar-facultad/editar-facultad.component";

const routes: Routes = [
  {
    path: '',
    component: ListarfacultadsComponent
  },
  {
    path: 'listar',
    component: ListarfacultadsComponent
  },
  {
    path: 'crear',
    component: CrearfacultadComponent
  },
  {
    path: 'detalle/:id',
    component: DetallefacultadComponent
  },
  {
    path: 'editar/:id',
    component: EditarfacultadComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadRoutingModule { }
