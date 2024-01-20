import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HerbsService } from '../../services/herbs.service';

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
herbsService = inject(HerbsService)
baseUrl = environment.domain;
allHerbs:any;

  constructor() {}
  ngOnInit (): void {
   this.herbsService.getAllHerbs().subscribe({
    next: (value) => {
      this.allHerbs = value;
    },
    error: (error: any) => console.log(error),
   })
  }


}
