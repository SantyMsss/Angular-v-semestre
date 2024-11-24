import {Component, OnInit} from '@angular/core';
import {Facultad} from "../model/facultad";
import {FacultadService} from "../service/facultad.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-listar-facultad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-facultad.component.html',
  styleUrls: ['./listar-facultad.component.css']
})
export class ListarFacultadesComponent {

  facultades: Facultad[];

  constructor(private facultadService: FacultadService, private routerPath: Router, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.obtenerFacultades();
  }

  editarFacultad(codigo_facu: number) {
    this.routerPath.navigate(['/editar-facultad/' + codigo_facu]);
  }

  private obtenerFacultades() {
    this.facultadService.getFacultades().subscribe(dato => {
      this.facultades = dato;
    });
  }

  eliminarFacultad(codigo_facu: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar la facultad",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.facultadService.borrarFacultad(codigo_facu).subscribe(dato => {
          console.log(dato);
          this.obtenerFacultades();
          Swal.fire(
            'Facultad eliminada',
            'La facultad ha sido eliminada con exito',
            'success'
          )
        })
      }
    });


  }

  verDetalleFacultad(codigo_facu: number) {
    this.routerPath.navigate(['/detalle-facultad/' + codigo_facu]);
  }



}
