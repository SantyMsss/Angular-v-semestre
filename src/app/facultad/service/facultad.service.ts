import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Facultad} from "../model/facultad";
import {map, Observable, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private baseUrl: string = `/facultades`;

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('/api/v1/facultad-service/data');
  }

  getFacultades(): Observable<Facultad[]> {
    return this.httpClient.get<Facultad[]>(this.baseUrl)
  }


  getFacultad(codigo_facu: number): Observable<Facultad> {
    return this.httpClient.get<Facultad>(`${this.baseUrl}/${codigo_facu}`);
  }

  crearFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Facultad>(this.baseUrl, facultad, {headers});
  }
  editarFacultad(facultad: Facultad): Observable<Facultad> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<Facultad>(`${this.baseUrl}/${facultad.codigo_facu}`, facultad, {headers});
  }

  borrarFacultad(codigo_facu: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${codigo_facu}`);
  }

}
