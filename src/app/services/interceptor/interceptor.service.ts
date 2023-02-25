import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenService } from '@services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor(private _tokenService: TokenService) { }

  intercept(req, next) {
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._tokenService.getToken()}`
      }
    })
    return next.handle(authRequest);
  }

  
}
