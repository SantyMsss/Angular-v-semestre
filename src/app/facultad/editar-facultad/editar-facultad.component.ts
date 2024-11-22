import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FacultadService } from "../service/facultad.service";
import { Facultad } from "../model/facultad";
import Swal from "sweetalert2";
import {CommonModule} from '@angular/common';
import {catchError, of, tap} from 'rxjs';

@Component({
  selector: 'app-editar-facultad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-facultad.component.html',
  styleUrls: ['./editar-facultad.component.css']
})
export class EditarFacultadComponent {

  codigo_facu: number;
  facultad: Facultad = new Facultad();
  constructor(private facultadService: FacultadService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.codigo_facu = this.route.snapshot.params['id'];

    this.facultadService.getFacultad(this.codigo_facu).pipe(
      tap(dato => { //realiza algun efecto secundario
        this.facultad = dato;
      }),
      catchError(error => {
        console.error(error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe();
  }

  irListaFacultades() {
    this.router.navigate(['/facultades']);
    Swal.fire('Facultad actualizada', `La facultad ${this.facultad.nombre_facu} ha sido actualizado con exito`, `success`);
  }

  onSubmit(): void {
    if (this.facultad) {
      this.facultadService.editarFacultad(this.codigo_facu, this.facultad).pipe(
        tap(dato => {
          this.irListaFacultades(); // Redirige en caso de éxito
        }),
        catchError(error => {
          console.error('Error al actualizar el empleado:', error);
          return of(null); // Retorna un observable vacío en caso de error
        })
      ).subscribe(); // Realiza la suscripción
    }
  }



}

