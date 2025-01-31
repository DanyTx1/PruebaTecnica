import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  getAlumnosByGrado(grado: number): Observable<any> {
    return this.http.get(`${this.urlBase}consultar-alumno/${grado}/`);
  }

  registrarAlumno(alumnoData: any): Observable<any> {
    return this.http.post(`${this.urlBase}crear-alumno/`, alumnoData);
  }

}
