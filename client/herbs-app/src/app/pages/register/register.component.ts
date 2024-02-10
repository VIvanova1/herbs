import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userService = inject(UserService);
  router = inject(Router);
  tokenService = inject(TokenService);

  register(form: NgForm) {
   this.userService.register(form.value).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.token);
      this.tokenService.isLoggedIn$.next(true);
      this.router.navigate(['herbs/catalog']);
    },
    error: (error) => {
      console.log(error);
    },
  });
  }
}
