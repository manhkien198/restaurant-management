import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  public submit(): void {
    console.log(this.registerForm.value);
  }
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}
}
