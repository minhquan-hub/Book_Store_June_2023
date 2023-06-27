import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../../shared/services/auth.service'
import { CookieStorageService } from '../../../shared/services/cookie-storage.service'
import { CookieKeyEnum } from '../../../shared/enum/cookie-key-enum'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  emailErrorMessage = '';
  passwordErrorMessage = '';

  constructor(
    private authService: AuthService,
    private cookieStorageService: CookieStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onLogin() {
    const emailForm = this.loginForm.get('email');
    const passwordForm = this.loginForm.get('password');

    if (emailForm?.hasError('required')) {
      this.emailErrorMessage = 'Email is required';
    }

    if (emailForm?.hasError('email')) {
      this.emailErrorMessage = 'Please provide a valid email address';
    }

    if (passwordForm?.hasError('required')) {
      this.passwordErrorMessage = 'Password is required';
    }

    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.submitted = true;
      if (this.submitted) {
        this.authService.login(formData).subscribe((res: any) => {
          this.cookieStorageService.saveDataUser(CookieKeyEnum.Email, res.email);
          this.cookieStorageService.saveDataUser(
            CookieKeyEnum.ROLE,
            res.roleName,
          );
          this.cookieStorageService.saveDataUser(CookieKeyEnum.TOKEN, res.token);
        })
      }

      this.router.navigate(['/']);
    }
  }
}
