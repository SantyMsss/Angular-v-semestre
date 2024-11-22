import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listar', redirectTo: '/facultad/listar', pathMatch: 'full' },
  { path: 'crear', redirectTo: '/facultad/crear', pathMatch: 'full' },
  { path: 'detalle/:id', redirectTo: '/facultad/detalle/:id', pathMatch: 'full' },
  { path: 'editar/:id', redirectTo: '/facultad/editar/:id', pathMatch: 'full' },
  { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
