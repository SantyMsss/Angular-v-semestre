import { Component, Input } from '@angular/core';
import { Facultad } from "../model/facultad";
import { FacultadService } from "../service/facultad.service";
import Swal from "sweetalert2";
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-detalle-facultad',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './detalle-facultad.component.html',
  styleUrls: ['./detalle-facultad.component.css']
})
export class DetalleFacultadComponent {

  codigo_facu: number;
  facultad: Facultad = new Facultad();
  constructor(private route: ActivatedRoute, private facultadService: FacultadService) { }

  ngOnInit(): void {
    this.codigo_facu = this.route.snapshot.params['id'];
    this.facultadService.getFacultad(this.codigo_facu).subscribe(dato => {
      this.facultad = dato;
      Swal.fire(`Detalles de la facultad ${this.facultad.nombre_facu}`);
    });
  }


}
