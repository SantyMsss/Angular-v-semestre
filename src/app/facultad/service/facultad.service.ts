import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facultad} from "../model/facultad";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private baseUrl: string = "http://18.218.121.26:8080/api/v1/facultad-service/facultades"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) {

  }

  getFacultades(): Observable<Facultad[]> {
    return this.httpClient.get<Facultad[]>(`${this.baseUrl}`);
  }

  getFacultad(codigo_facu: number): Observable<Facultad> {
    return this.httpClient.get<Facultad>(`${this.baseUrl}/${codigo_facu}`);
  }

  crearFacultad(facultad: Facultad): Observable<Facultad> {
    return this.httpClient.post<Facultad>(`${this.baseUrl}`, facultad);
  }

  editarFacultad(codigo_facu: number, facultad: Facultad): Observable<Facultad> {
    return this.httpClient.put<Facultad>(`${this.baseUrl}/${facultad.codigo_facu}`, facultad);
  }

  borrarFacultad(codigo_facu: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${codigo_facu}`);
  }

}
