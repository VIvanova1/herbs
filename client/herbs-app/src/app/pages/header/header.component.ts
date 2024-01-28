import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  afterRender,
  inject,
} from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userService = inject(UserService);
  tokenService = inject(TokenService);
  constructor() {}

  logout() {
    this.userService.logout();
  }


}
