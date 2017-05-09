import { Router } from '@angular/router';
import { AuthService } from './user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Routing App!';

  constructor(private authService: AuthService, private router: Router) {}

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
