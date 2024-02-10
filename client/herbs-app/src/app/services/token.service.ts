import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  token() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }else{
     return null;
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

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }
}
