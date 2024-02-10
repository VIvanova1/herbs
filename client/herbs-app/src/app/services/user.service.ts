import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  router = inject(Router);
  http = inject(HttpClient);
  baseUrl = environment.domain;
  constructor() {}

  register(data: NgForm) {
    return this.http.post(this.baseUrl + '/api/user/register', data, {
      withCredentials: true,
    });
  }

  login(data: NgForm) {
    return this.http.post(this.baseUrl + '/api/user/login', data, {
      withCredentials: true,
    });
  }

  logout() {
    return this.http
      .get(this.baseUrl + '/api/user/logout', {
        withCredentials: true,
      })
      .subscribe({
        next: (value) => {
          localStorage.clear();
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
