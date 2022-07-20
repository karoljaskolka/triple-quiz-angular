import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  Observable,
  of,
  throwError,
} from 'rxjs';
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
  private loading = new BehaviorSubject<boolean>(false);

  loading$ = this.loading.asObservable();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  login(data: LoginDto): Observable<TokenDto> {
    this.loading.next(true);
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/login', data).pipe(
      finalize(() => this.loading.next(false)),
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return throwError(() => err);
      })
    );
  }

  register(data: RegisterDto): Observable<UserDto> {
    this.loading.next(true);
    return this.http
      .post<UserDto>(this.apiUrl + '/api/auth/register', data)
      .pipe(
        finalize(() => this.loading.next(false)),
        catchError((err) => {
          this.notificationService.error(err.error.error_message);
          return throwError(() => err);
        })
      );
  }

  guest(): Observable<TokenDto> {
    this.loading.next(true);
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/guest', {}).pipe(
      finalize(() => this.loading.next(false)),
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return throwError(() => err);
      })
    );
  }
}
