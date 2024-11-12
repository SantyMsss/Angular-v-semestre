import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FacultadService } from "../service/facultad.service";
import { Facultad } from "../model/facultad";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-facultad',
  templateUrl: './editar-facultad.component.html',
  styleUrls: ['./editar-facultad.component.css']
})
export class EditarFacultadComponent implements OnInit {

  // Creamos e inicializamos el formulario editarFacultadForm usando el constructor de FormGroup
  public editarFacultadForm: FormGroup = new FormGroup({
    nombreFacu: new FormControl('', [Validators.required, Validators.minLength(4)]),
    decano: new FormControl('', [Validators.required, Validators.minLength(4)]),
    modalidad: new FormControl('', [Validators.required, Validators.minLength(4)]),
    proyecInvestFacu: new FormControl('', [Validators.required, Validators.minLength(4)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    programasAcademicos: new FormControl('', [Validators.required, Validators.minLength(4)]),
    calendarioAcademico: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  // Creamos un atributo (relacion) facultad que es el que vamos a editar
  public facultad!: Facultad;

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creación de facultad
   * @param facultadService Servicio de facultad para editar una facultad
   * @param route Ruta del componente
   */
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private facultadService: FacultadService,
    private route: ActivatedRoute
  ) {}

  /**
   * Método que cancela la edición de una facultad
   */
  cancelarEditarFacultad() {
    this.router.navigate(['/listar']); // Redirecciona a la ruta /listar
  }

  /**
   * Método que edita una facultad en el servicio
   * @param facultad Facultad a editar
   */
  editarFacultad(facultad: Facultad) {
    this.facultadService.editarFacultad(facultad).subscribe( // Le decimos al servicio que edite la facultad
      (facultad: Facultad) => {
       
        Swal.fire(
          'Facultad editada',
          `La facultad ${facultad.nombreFacu} ha sido actualizada con éxito`,
          'success'
        );
        this.router.navigate(['/listar']); // Redirecciona a la ruta /listar
      },
      error => {

        Swal.fire(
          'Error',
          'Ha ocurrido un error al actualizar la facultad',
          'error'
        );
      }
    );
  }

  /**
   * Método que se llama al enviar el formulario
   */
  onSubmit() {
    if (this.editarFacultadForm.valid) { // Verificamos si el formulario es válido
      const facultadEditada: Facultad = { ...this.facultad, ...this.editarFacultadForm.value }; // Combinamos la facultad original con los nuevos valores
      this.editarFacultad(facultadEditada); // Llamamos al método para editar la facultad
    } else {

      Swal.fire(
        'Formulario inválido',
        'Por favor, complete el formulario correctamente',
        'error'
      );
    }
  }

  /**
   * Método que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idFacultad = parseInt(this.route.snapshot.params['id']); // Obtenemos el id de la facultad a editar

    this.facultadService.getFacultad(idFacultad).subscribe((facultad) => { // Le decimos al servicio que nos traiga la facultad a editar
      this.facultad = facultad;
      // Creamos el formulario editarFacultadForm con los valores actuales de la facultad
      this.editarFacultadForm = this.formBuilder.group({
        nombreFacu: [this.facultad.nombreFacu, [Validators.required, Validators.minLength(4)]],
        decano: [this.facultad.decano, [Validators.required, Validators.minLength(4)]],
        modalidad: [this.facultad.modalidad, [Validators.required, Validators.minLength(4)]],
        proyecInvestFacu: [this.facultad.proyecInvestFacu, [Validators.required, Validators.minLength(4)]],
        descripcion: [this.facultad.descripcion, [Validators.required, Validators.minLength(4)]],
        telefono: [this.facultad.telefono, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        correo: [this.facultad.correo, [Validators.required, Validators.email]],
        programasAcademicos: [this.facultad.programasAcademicos, [Validators.required, Validators.minLength(4)]],
        calendarioAcademico: [this.facultad.calendarioAcademico, [Validators.required, Validators.minLength(4)]]
      });
    });
  }

}
