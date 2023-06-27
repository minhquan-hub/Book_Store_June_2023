import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CookieStorageService } from '../../../shared/services/cookie-storage.service';
import { AuthService } from '../../../shared/services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    const mockAuthService = {
      login: () => {
        return of({
          token: 'hdf7234bsf724H6fgh64dfgGFGDHFGs',
          roleName: 'Admin',
          email: 'quan@gmail.com'
        });
      }
    }


    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.loginForm).toBeInstanceOf(FormGroup);
    expect(component.loginForm.controls['email']).toBeInstanceOf(FormControl);
    expect(component.loginForm.controls['password']).toBeInstanceOf(FormControl);
  });

  it('should set emailErrorMessage and passwordErrorMessage when form controls have errors', () => {
    const emailControl = component.loginForm.controls['email'];
    const passwordControl = component.loginForm.controls['password'];

    emailControl.setValue('');
    passwordControl.setValue('');

    component.onLogin();

    expect(component.emailErrorMessage).toBe('Email is required');
    expect(component.passwordErrorMessage).toBe('Password is required');
  });

  it('should call authService.login and navigate when the form is valid', () => {
    const formData = {
      email: 'test@example.com',
      password: 'password123'
    };

    component.loginForm.controls['email'].setValue(formData.email);
    component.loginForm.controls['password'].setValue(formData.password);
    const routerSpy = spyOn(router, 'navigate');

    component.onLogin();

    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});
