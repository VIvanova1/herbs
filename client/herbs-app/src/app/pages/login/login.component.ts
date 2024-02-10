import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UserService);
  tokenService = inject(TokenService);
  router = inject(Router);


  login(form: NgForm) {
    this.userService.login(form.value).subscribe({
      next: (res:any) => {
        localStorage.setItem('token', res.token)
        this.tokenService.isLoggedIn$.next(true);
        this.router.navigate(['herbs/catalog']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
