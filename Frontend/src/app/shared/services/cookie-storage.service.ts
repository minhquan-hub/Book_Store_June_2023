import { Injectable } from '@angular/core';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { HttpHeaders } from '@angular/common/http';
import { CookieKeyEnum } from '../enum/cookie-key-enum';
import { OidcSecurityService } from 'angular-auth-oidc-client';

const secretKey = 'JH67hjqiu234gvcHYTFhgdf67834DSB';
@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  constructor(
    private cookieService: CookieService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  saveDataUser(key: string, data: string): void {
    const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const cookieOptions: CookieOptions = {
      expires: expirationDate,
      secure: true,
      sameSite: 'Strict',
      path: '/',
    };

    this.cookieService.set(key, encryptedData, cookieOptions);
  }

  getDataUser(key: string): string {
    const data = this.cookieService.get(key);
    const decryptedData = CryptoJS.AES.decrypt(data, secretKey).toString(
      CryptoJS.enc.Utf8
    );

    return decryptedData;
  }

  logOut(): void {
    this.cookieService.deleteAll();
  }

  public getToken() {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.oidcSecurityService.getAccessToken()}`
    ); // may be localStorage/sessionStorage
    return { headers: header };
  }
}
