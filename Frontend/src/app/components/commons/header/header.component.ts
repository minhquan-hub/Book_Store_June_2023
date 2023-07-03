import { Component, OnInit } from '@angular/core';
import { CookieStorageService } from '../../../shared/services/cookie-storage.service';
import { CookieKeyEnum } from '../../../shared/enum/cookie-key-enum';

const Email = 'email'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cookieStorageService: CookieStorageService
  ) { }

  ngOnInit(): void {
  }

  isLogin() {
    return this.cookieStorageService.getDataUser(CookieKeyEnum.Email);
  }

  isAdmin() {
    const checkAdmin = this.cookieStorageService.getDataUser(CookieKeyEnum.ROLE)
    if(checkAdmin == 'Admin') return true;
    return false;
  }

  onLogout() {
    this.cookieStorageService.logOut();
  }

}
