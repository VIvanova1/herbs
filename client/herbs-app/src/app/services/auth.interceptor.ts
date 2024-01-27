import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from './token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService)
  const token = tokenService.token;
  const cloneReq = req.clone({
    setHeaders:{
      Authorization:'Bearer ' + token
    }
  })
  return next(cloneReq) ;
};
