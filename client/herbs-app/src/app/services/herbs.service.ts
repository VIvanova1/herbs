import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HerbsService {
  router = inject(Router);
  baseUrl = environment.domain;
  http = inject(HttpClient);
  constructor() {}

  getAllHerbs() {
    return this.http.get(this.baseUrl + '/api/herbs/catalog');
  }

  createHerb(data: NgForm) {
    return this.http
      .post(this.baseUrl +'/api/herbs/new', data)
      .subscribe({
        next: (value) => {
          this.router.navigate(['/api/herbs/catalog']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  getHerbById(id: any) {
    return this.http.get(this.baseUrl + '/api/herbs/details/' + id);
  }
}
