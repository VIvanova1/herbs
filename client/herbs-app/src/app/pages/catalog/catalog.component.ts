import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { error } from 'console';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
router = inject(Router);
http = inject(HttpClient);
baseUrl = environment.domain;
allHerbs:any;

  constructor() {}
  ngOnInit (): void {
   this.getAllHerbs().subscribe({
    next: (value) => {
      console.log(value);
      this.allHerbs = value;
    },
    error: (error: any) => console.log(error),
   })
  }

getAllHerbs(){
  return this.http.get(this.baseUrl + '/api/herbs/catalog');
}

}
