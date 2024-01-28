import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HerbsService } from '../../services/herbs.service';
import { TokenService } from '../../services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Herbs } from '../../models/herbs';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  router = inject(Router);
  herbsService = inject(HerbsService);
  tokenService = inject(TokenService);
  route = inject(ActivatedRoute);

  herbDetails: Herbs = {
    id: '',
    name: '',
    latin: '',
    image: '',
    description: '',
    owner: '',
  };
  isEdit: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const herbId = params.get('id');
      if (herbId) {
        this.herbsService.getHerbById(herbId).subscribe({
          next: (res: any) => {
            this.herbDetails = res;

            if (this.herbDetails) {
              this.isEdit = true;
            } else {
              this.isEdit = false;
            }
          },
          error: (error: any) => console.log(error),
        });
      }
    });
  }

  createForm(data: NgForm) {
    const token = this.tokenService.jwtdecrypt();
    const ownerId = token['_id'];
    if (this.isEdit) {
      console.log(data.value, 'dataEdit');
    } else {
      this.herbsService.createHerb({ ...data.value, ownerId }).subscribe({
        next: (res: any) => {
          this.router.navigate(['/herbs/catalog']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
