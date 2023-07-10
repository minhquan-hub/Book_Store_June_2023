import { Component, OnInit } from '@angular/core';
import { CookieStorageService } from '../../../shared/services/cookie-storage.service';
import { CookieKeyEnum } from '../../../shared/enum/cookie-key-enum';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  email = '';

  constructor(
    private cookieStorageService: CookieStorageService,
    private authService: AuthService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        console.log('da dang nhap:', isAuthenticated);
        this.email = userData.email;
      });
  }

  isLogin() {
    return this.cookieStorageService.getDataUser(CookieKeyEnum.Email);
  }

  isAdmin() {
    this.oidcSecurityService.getAccessToken();
    const userData = this.oidcSecurityService.getUserData();
    const checkAdmin = userData.resource_access['book-store'].roles[0];
    if (checkAdmin === 'admin') return true;
    return false;
  }

  onLogin() {
    this.authService.loginKeycloak();
  }

  onLogout() {
    this.authService.logoutKeycloak();
    this.cookieStorageService.logOut();
  }
}
