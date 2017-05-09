import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if(loginForm && loginForm.valid) {
      let userName = loginForm.form.value.userName;
      let password = loginForm.form.value.password;
      if(this.authService.login(userName, password)) {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }

}
