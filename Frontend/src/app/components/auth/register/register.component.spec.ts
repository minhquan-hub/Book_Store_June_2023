import { register } from "./../../../shared/mock-data/register.mock";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { of } from "rxjs";
import { AuthService } from "../../../shared/services/auth.service";
import { FormControl, FormGroup } from "@angular/forms";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;

  beforeEach(async () => {
    const mockAuthService = {
      register: () => {
        return of(true)
      }
    }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ RegisterComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.registerForm).toBeInstanceOf(FormGroup);
    expect(component.registerForm.controls['email']).toBeInstanceOf(FormControl);
    expect(component.registerForm.controls['password']).toBeInstanceOf(FormControl);
    expect(component.registerForm.controls['phone']).toBeInstanceOf(FormControl);
  });

  it('should set emailErrorMessage, passwordErrorMessage, and phoneErrorMessage when form controls have errors', () => {
    const emailControl = component.registerForm.controls['email'];
    const passwordControl = component.registerForm.controls['password'];
    const phoneControl = component.registerForm.controls['phone'];

    emailControl.setValue('');
    passwordControl.setValue('');
    phoneControl.setValue('invalid');

    component.validateForm();

    expect(component.emailErrorMessage).toBe('Email is required');
    expect(component.passwordErrorMessage).toBe('Password is required');
    expect(component.phoneErrorMessage).toBe('Please provide a valid phone number');
  });

  it('should call authService.register and navigate when the form is valid', () => {
    const formData = {
      email: 'test@example.com',
      password: 'password123',
      phone: '1234567890',
      role: 'User'
    };

    component.registerForm.controls['email'].setValue(formData.email);
    component.registerForm.controls['password'].setValue(formData.password);
    component.registerForm.controls['phone'].setValue(formData.phone);
    const routerSpy = spyOn(router, 'navigate');

    component.onRegister();

    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });
});
