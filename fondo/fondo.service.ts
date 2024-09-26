import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Fondo } from './fondo';

@Injectable({
  providedIn: 'root',
})
export class FondoService {
  private apiUrl: string = environment.baseUrl + 'fondos';

  constructor(private http: HttpClient) {}

  getFondos(): Observable<Fondo[]> {
    return this.http.get<Fondo[]>(this.apiUrl);
  }

  createFondo(fondo: any): Observable<Fondo> {
    return this.http.post<Fondo>(this.apiUrl, fondo);
  }
}
