import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../../shared/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  emailErrorMessage = '';
  passwordErrorMessage = '';
  phoneErrorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      role: new FormControl('User'),
    })
  }

  onRegister() {
    this.validateForm()

    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.submitted = true;
      if (this.submitted) {
        this.authService.register(formData).subscribe((res: any) => {
          alert('Create User Successful');
          this.router.navigate(['/login']);
        })
      }
    }
  }

  validateForm() {
    const emailForm = this.registerForm.get('email');
    const passwordForm = this.registerForm.get('password');
    const phoneForm = this.registerForm.get('phone');

    if (emailForm?.hasError('required')) {
      this.emailErrorMessage = 'Email is required';
    }

    if (emailForm?.hasError('email')) {
      this.emailErrorMessage = 'Please provide a valid email address';
    }

    if (passwordForm?.hasError('required')) {
      this.passwordErrorMessage = 'Password is required';
    }

    if (phoneForm?.hasError('required')) {
      this.phoneErrorMessage = 'Phone Number is required';
    }

    if (phoneForm?.hasError('pattern')) {
      this.phoneErrorMessage = 'Please provide a valid phone number';
    }
  }
}
