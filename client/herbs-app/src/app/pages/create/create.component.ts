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
  herbId:string='';

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
      this.herbId = params.get('id');
      if (this.herbId) {
        this.herbsService.getHerbById(this.herbId).subscribe({
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
      this.herbsService.editHerb(this.herbId, { ...data.value, ownerId }).subscribe({
        next: (res: any) => {
          console.log(res, 'res');
        },
        error: (error: any) => {
          console.log(error);
        },
      })
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
