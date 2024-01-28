import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

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

  jwtdecrypt(): any {
    const newToken = this.token()
    const decodedToken = jwtDecode(newToken!.toString());
    return decodedToken
  }
}
