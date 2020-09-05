import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  ObtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${environment.baseUrl}Persona`);
  }
}
