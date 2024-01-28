import { Component, OnInit, inject } from '@angular/core';
import { HerbsService } from '../../services/herbs.service';
import { Herbs } from '../../models/herbs';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  herbsService = inject(HerbsService);
  tokenService = inject(TokenService);

  herbDetails: Herbs | undefined;
  route = inject(ActivatedRoute);

  isOwner: boolean = false;

  ngOnInit (): void {
    //ToDo: URL Segment: '..'

   this.route.paramMap.subscribe((params:any)=>{
    const herbId = params.get('id');
    console.log(herbId);
    this.herbsService.getHerbById(herbId).subscribe({
      next: (res: any) => {
        this.herbDetails = res;
        if(res.owner === this.owner()){
          this.isOwner = true;
        }else{
          this.isOwner = false;
        }
      },
      error: (error: any) => console.log(error),
    });
   })
  }

  owner(){
    const token =  this.tokenService.jwtdecrypt();
    const ownerId = token['_id'];
    return ownerId;
  }
}
