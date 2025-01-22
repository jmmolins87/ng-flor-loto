import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public username = '';
  public password = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  onLogin() {
    const user = this.authService.login(this.username, this.password);
    if (user) {
      this.router.navigate(['admin/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  onGoToSite() {
    this.router.navigate(['admin/dashboard']);
  }
}
