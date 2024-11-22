import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facultad} from "../model/facultad";
import {map, Observable, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private baseUrl: string = "http://18.218.121.26:8080"

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('/api/v1/facultad-service/data');
  }

  getFacultades(): Observable<Facultad[]> {
    return this.httpClient.get<Facultad[]>(this.baseUrl+"/facultades")
      .pipe(
        map((result:any)=>{
          console.log(result._embedded.facultades);
          return result._embedded.facultades;
        }));
  }


  getFacultad(codigo_facu: number): Observable<Facultad> {
    return this.httpClient.get<Facultad>(this.baseUrl + '/facultades/' + codigo_facu);
  }

  crearFacultad(facultad: Facultad): Observable<Facultad> {
    return this.httpClient.post<Facultad>(this.baseUrl+"/facultades", facultad);
  }

  editarFacultad(facultad: Facultad): Observable<Facultad> {
    return this.httpClient.put<Facultad>(this.baseUrl+"/facultades/"+facultad.codigo_facu, facultad);
  }

  borrarFacultad(codigo_facu: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/facultades/" + codigo_facu);
  }

}
