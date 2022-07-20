import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();

    if (!token) return next.handle(request);

    const requestClone = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(requestClone).pipe(
      catchError((err) => {
        if (token && err.status === 401) this.logoutWithRedirection();
        return throwError(() => err);
      })
    );
  }

  logoutWithRedirection() {
    this.tokenService.clearToken();
    this.router.navigate(['/']);
  }
}
