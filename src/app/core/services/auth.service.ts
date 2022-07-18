import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../dtos/login';
import { RegisterDto } from '../dtos/register';
import { TokenDto } from '../dtos/token';
import { UserDto } from '../dtos/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: LoginDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/login', data);
  }

  register(data: RegisterDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.apiUrl + '/api/auth/register', data);
  }

  guest(): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.apiUrl + '/api/auth/guest', {});
  }
}
