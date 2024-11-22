import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {Facultad} from "../model/facultad";
import {FacultadService} from "../service/facultad.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {CommonModule} from '@angular/common';
import {catchError, tap, throwError} from 'rxjs';
@Component({
  selector: 'app-crear-facultad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-facultad.component.html',
  styleUrl: './crear-facultad.component.css'
})
export class CrearFacultadComponent{

  facultad: Facultad = new Facultad();
  constructor( private facultadService: FacultadService, private router: Router) {
  }

  ngOnInit(): void {

  }


  guardarFacultad() {
    this.facultadService.crearFacultad(this.facultad).pipe(
      tap(dato => {
        console.log(dato);
        this.irListarFacultades();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }


  irListarFacultades() {
    this.router.navigate(['/facultades']);
    Swal.fire('Facultad registrada', `El empleado ${this.facultad.nombre_facu} ha sido registrado con exito`, `success`);
  }



  onSubmit() {
   this.guardarFacultad();
  }



}
