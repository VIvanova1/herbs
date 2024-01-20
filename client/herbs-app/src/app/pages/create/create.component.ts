import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HerbsService } from '../../services/herbs.service';
import { Herbs } from '../../models/herbs';

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
   this.herbsService.createHerb(data);
  }
}
