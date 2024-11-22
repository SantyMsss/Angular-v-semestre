import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facultad} from "../model/facultad";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private baseUrl: string = "http://test.denkitronik.com"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) {

  }

  getFacultad(): Observable<Facultad[]> {
    return this.httpClient.get<Facultad[]>(this.baseUrl+"/facultades")
      .pipe(
        map((result:any)=>{
          console.log(result._embedded.facultades);
          return result._embedded.facultades;
        }));
  }

  getFacultad(idFacultad: number): Observable<Facultad> {
    return this.httpClient.get<Facultad>(this.baseUrl + '/facultades/' + idFacultad);
  }

  crearFacultad(facultad: Facultad): Observable<Facultad> {
    return this.httpClient.post<Facultad>(this.baseUrl+"/facultades", facultad);
  }

  editarFacultad(facultad: Facultad): Observable<Facultad> {
    return this.httpClient.put<Facultad>(this.baseUrl+"/facultades/"+facultad.id, facultad);
  }

  borrarFacultad(idFacultad: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/facultades/" + idFacultad);
  }

}