import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(data: any): Observable<any> {
    const pathUrl = environment.user.register;
    return this.http.post<any>(pathUrl, data);
  }

  public login(data: any): Observable<any> {
    const pathUrl = environment.auth.login;
    return this.http.post<any>(pathUrl, data);
  }
}
