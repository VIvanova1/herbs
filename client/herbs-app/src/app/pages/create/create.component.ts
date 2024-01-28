import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HerbsService } from '../../services/herbs.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  router = inject(Router);
  herbsService = inject(HerbsService);
  tokenService = inject(TokenService);

  createForm(data: NgForm) {
   const token =  this.tokenService.jwtdecrypt();
   const ownerId = token['_id'];
   this.herbsService.createHerb({...data.value, ownerId}).subscribe({
    next: (res:any) => {
      this.router.navigate(['/herbs/catalog']);
    },
    error: (error:any) => {
      console.log(error);
    }
  });
  }
}
