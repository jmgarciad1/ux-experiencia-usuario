import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Ringtone } from './ringtone';

@Injectable({
  providedIn: 'root',
})
export class RingtoneService {
  private apiUrl: string = environment.baseUrl + 'ringtones';

  constructor(private http: HttpClient) {}

  getRingtones(): Observable<Ringtone[]> {
    return this.http.get<Ringtone[]>(this.apiUrl);
  }

  createRingtone(ringtone: any): Observable<Ringtone> {
    return this.http.post<Ringtone>(this.apiUrl, ringtone);
  }
}
