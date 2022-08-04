import { Injectable } from '@angular/core';
import { TokenClaimsDto } from '../dtos/token-claims';
import { Role } from '../types/role';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenChange = new Subject<void>();
  tokenChange$ = this.tokenChange.asObservable();

  setToken(token: string): void {
    localStorage.setItem('jwt_token', token);
    this.tokenChange.next();
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  clearToken(): void {
    localStorage.removeItem('jwt_token');
    this.tokenChange.next();
  }

  getUserRole(): Role | null {
    const token = this.getToken();
    return token ? (jwt_decode(token) as TokenClaimsDto).userRole : null;
  }

  getUserLogin(): string | null {
    const token = this.getToken();
    return token ? (jwt_decode(token) as TokenClaimsDto).userLogin : null;
  }

  getUserId(): string | null {
    const token = this.getToken();
    return token ? (jwt_decode(token) as TokenClaimsDto).userId : null;
  }
}
