import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieStorageService } from '../shared/services/cookie-storage.service';
import { CookieKeyEnum } from '../shared/enum/cookie-key-enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieStorageService: CookieStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const role = this.cookieStorageService.getDataUser(CookieKeyEnum.ROLE);
    console.log("role:"+ role)
    if (role) {
        // check if route is restricted by role
      if (route.data['roles'] && route.data['roles'].indexOf(role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
