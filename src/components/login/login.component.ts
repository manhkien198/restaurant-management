import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs';
import { SigninService } from './service/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  public loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signinService: SigninService,
    private messageService: MessageService
  ) {}

  public submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.signinService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successfully',
        });
      },
      error: (error: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error,
        });
      },
    });
  }
  public get controls() {
    return this.loginForm.controls;
  }
  public naviToRegister(): void {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
