import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
