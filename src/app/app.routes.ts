import {Routes} from '@angular/router';
import {ListarFacultadesComponent} from './facultad/listar-facultad/listar-facultad.component';
import {CrearFacultadComponent} from './facultad/crear-facultad/crear-facultad.component';
import {EditarFacultadComponent} from './facultad/editar-facultad/editar-facultad.component';
import {DetalleFacultadComponent} from './facultad/detalle-facultad/detalle-facultad.component';

export const routes: Routes = [
  { path: 'facultades', component:ListarFacultadesComponent},
  { path: '', redirectTo: 'facultades', pathMatch: 'full' },
  { path: 'crear-facultad', component:CrearFacultadComponent},
  { path: 'editar-facultad/:id', component:EditarFacultadComponent},
  { path: 'detalle-facultad/:id', component:DetalleFacultadComponent},




];
