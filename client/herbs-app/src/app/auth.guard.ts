import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';


export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  if(tokenService.token){
    return true;
  }else{
    return false;
  }
};
