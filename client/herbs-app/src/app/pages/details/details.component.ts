import { Component, OnInit, inject } from '@angular/core';
import { HerbsService } from '../../services/herbs.service';
import { Herbs } from '../../models/herbs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  herbsService = inject(HerbsService);
  herbDetails: Herbs | undefined;
  route = inject(ActivatedRoute);

  ngOnInit (): void {
   this.route.paramMap.subscribe((params)=>{
    const herbId = params.get('id');
    this.herbsService.getHerbById(herbId).subscribe({
      next: (value: any) => {
        console.log(value);
        this.herbDetails = value;
      },
      error: (error: any) => console.log(error),
    });
   })
  }
}
