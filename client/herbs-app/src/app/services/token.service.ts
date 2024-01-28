import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  afterRender,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  token() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    } else {
      return undefined;
    }
  }

  isLogged() {
    if (this.token()) {
      return true;
    } else {
      return false;
    }
  }
}
