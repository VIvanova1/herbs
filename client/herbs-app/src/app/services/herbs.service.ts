import { Injectable, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HerbsService {
  baseUrl = environment.domain;
  http = inject(HttpClient);
  constructor() {}

  getAllHerbs() {
    return this.http.get(this.baseUrl + '/api/herbs/catalog');
  }

  createHerb(data: NgForm) {
    return this.http.post(this.baseUrl + '/api/herbs/new', data);
  }

  getHerbById(id: string) {
    return this.http.get(this.baseUrl + '/api/herbs/details/' + id);
  }

  editHerb(id: string, data: NgForm) {
    return this.http.put(this.baseUrl + '/api/herbs/edit/' + id, data);
  }

  deleteHerb(id: string) {
    return this.http.delete(this.baseUrl + '/api/herbs/delete/' + id);
  }
}
