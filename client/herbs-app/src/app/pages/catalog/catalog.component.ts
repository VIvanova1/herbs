import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, afterRender, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { HerbsService } from '../../services/herbs.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);
  herbsService = inject(HerbsService);
  baseUrl = environment.domain;
  allHerbs: any;
  userService = inject(UserService);
  tokenService = inject(TokenService);

  constructor() {

  }

  ngOnInit(): void {
    this.herbsService.getAllHerbs().subscribe({
      next: (value) => {
        this.allHerbs = value;
      },
      error: (error: any) => console.log(error),
    });
  }
}
