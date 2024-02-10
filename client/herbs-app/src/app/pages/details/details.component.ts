import { Component, OnInit, inject, signal } from '@angular/core';
import { HerbsService } from '../../services/herbs.service';
import { Herbs } from '../../models/herbs';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  herbsService = inject(HerbsService);
  tokenService = inject(TokenService);

  herbDetails: Herbs | undefined;
  route = inject(ActivatedRoute);
  router = inject(Router);
  isOwner: boolean = false;

  herb = signal<Herbs>({
    id: '',
    name: '',
    latin: '',
    image: '',
    description: '',
    owner: '',
  });
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const herbId = params.get('id');
      this.herbsService.getHerbById(herbId).subscribe({
        next: (res: any) => {
          this.herbDetails = res;
          if (res.owner === this.owner()) {
            this.isOwner = true;
          } else {
            this.isOwner = false;
          }
        },
        error: (error: any) => console.log(error),
      });
    });
  }

  owner() {
    const token = this.tokenService.jwtdecrypt();
    const ownerId = token['_id'];
    return ownerId;
  }

  editHerb(herb: any) {
    this.herb.set(herb);

    this.router.navigate(['/herbs/edit/', herb._id]);
  }

  deleteHerb(herb: any) {
    const confirm = window.confirm('Do you want to remove this herb?');
    if (confirm) {
      this.herbsService.deleteHerb(herb._id).subscribe({
        next: (res: any) => {
          this.router.navigate(['/herbs/catalog']);
        },
        error: (error: any) => {
          console.log(error.error);
        },
      });
    }
  }
}
