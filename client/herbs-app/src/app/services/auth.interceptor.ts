import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from './token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService)
  const token = tokenService.token;
  if(token){
    req = req.clone({
      setHeaders:{
        Authorization: token
      }
    })
  }

  return next(req) ;
};
