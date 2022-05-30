import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  public submitted: boolean = false;
  public submit(): void {
    this.submitted = true;
  }
  public naviToRegister(): void {
    this.router.navigate(['/register']);
  }
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
}
