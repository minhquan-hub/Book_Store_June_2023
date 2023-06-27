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
    return this.http.get(environment.auth.register, data);
  }

  public login(data: any): Observable<any> {
    return this.http.get(environment.auth.login, data);
  }
}
