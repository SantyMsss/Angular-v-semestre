import { Component, Input } from '@angular/core';
import { Facultad } from "../model/facultad";

@Component({
  selector: 'app-detalle-facultad',
  templateUrl: './detalle-facultad.component.html',
  styleUrls: ['./detalle-facultad.component.css']
})
export class DetalleFacultadComponent {
  @Input() facultad!: Facultad;
}
