import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
userService=inject(UserService);


}
