import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
userService=inject(UserService);
isLogged:boolean = false;
ngOnInit (): void {
  this.isLogged = this.userService.isAuth()
}

}
