import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HerbsService } from '../../services/herbs.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  herbsService = inject(HerbsService);

  createForm(data: NgForm) {
    console.log('HerbsData', data.value);
   this.herbsService.createHerb(data.value);
  }
}
