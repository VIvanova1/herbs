import { Component, OnInit, inject } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  userService = inject(UserService);
  isLogged: boolean = false;

  logout() {
    this.userService.logout();
  }

  ngOnInit(): void {
    this.isLogged=this.userService.isAuth();
  }
}
