import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Sesion } from './sesion';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private apiUrl: string = environment.baseUrl + 'sesiones';

  constructor(private http: HttpClient) {}

  createSesion(sesion: any): Observable<Sesion> {
    return this.http.post<Sesion>(this.apiUrl, sesion);
  }
}
