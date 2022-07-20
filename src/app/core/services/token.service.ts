import { Injectable } from '@angular/core';
import { TokenClaimsDto } from '../dtos/token-claims';
import { Role } from '../types/role';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  setToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  clearToken(): void {
    localStorage.removeItem('jwt_token');
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
