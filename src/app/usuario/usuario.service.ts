import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl: string = environment.baseUrl + 'usuarios';

  constructor(private http: HttpClient) {}

  createUsuario(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}
