import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Autenticacion } from './autenticacion';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private apiUrl: string = environment.baseUrl + 'autenticaciones';

  constructor(private http: HttpClient) {}

  createAutenticacion(autenticacion: any): Observable<Autenticacion> {
    return this.http.post<Autenticacion>(this.apiUrl, autenticacion);
  }
}
