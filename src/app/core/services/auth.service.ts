import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../dtos/login';
import { RegisterDto } from '../dtos/register';
import { TokenDto } from '../dtos/token';
import { UserDto } from '../dtos/user';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  login(data: LoginDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/login', data).pipe(
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return of();
      })
    );
  }

  register(data: RegisterDto): Observable<UserDto> {
    return this.http
      .post<UserDto>(this.apiUrl + '/api/auth/register', data)
      .pipe(
        catchError((err) => {
          this.notificationService.error(err.error.error_message);
          return of();
        })
      );
  }

  guest(): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/guest', {}).pipe(
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return of();
      })
    );
  }
}
