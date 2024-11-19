import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Facultad} from "../model/facultad";
import {FacultadService} from "../service/facultad.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
@Component({
  selector: 'app-crear-facultad',
  templateUrl: './crear-facultad.component.html',
  styleUrl: './crear-facultad.component.css'
})
export class CrearFacultadComponent {
  public crearFacultadForm: FormGroup= new FormGroup({
    facultad: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de facultad
   * @param facultadService Servicio de facultad para crear una facultad
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private facultadService: FacultadService) {

  }

  /**
   * Metodo que crea una facultad
   */
  cancelarCrearFacultad() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que crea una facultad en el servicio
   * @param facultad Facultad a crear
   */
  crearCurso(facultad: Facultad) {
    this.facultadService.crearFacultad(facultad).subscribe(
      (facultad: Facultad) => {
        // console.log(facultad);
        Swal.fire(
          'facultad creada',
          `la facultad ${facultad.nombre_facu} ha sido creado con exito`,
          'success'
        );
        this.crearFacultadForm.reset();  //Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }
//regexp: regular expression
  ngOnInit(): void {
    this.crearFacultadForm = this.formBuilder.group({
      facultad: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
