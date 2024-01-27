import { Injectable, afterRender } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token:string | undefined;

  constructor() {
    afterRender(()=>{

      this.token=localStorage.getItem('token') ||undefined
    })
  }
}
