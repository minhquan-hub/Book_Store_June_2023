import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Auth } from 'src/app/models/auth.model';
import { Register } from 'src/app/models/register.model';
import { RegisterResponse } from 'src/app/models/register-response.model';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private oidcSecurityService: OidcSecurityService
  ) {}

  public register(data: any): Observable<Auth> {
    const pathUrl = environment.user.register;
    return this.http.post<any>(pathUrl, data);
  }

  public login(data: Register): Observable<RegisterResponse> {
    const pathUrl = environment.auth.login;
    return this.http.post<RegisterResponse>(pathUrl, data);
  }

  public loginKeycloak() {
    this.oidcSecurityService.authorize();
  }

  public logoutKeycloak() {
    this.oidcSecurityService.logoff();
  }
}
