import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store token in local storage', () => {
    service.setToken('TS_JWT_TOKEN');

    expect(localStorage.getItem('jwt_token')).toEqual('TS_JWT_TOKEN');
  });

  it('should get token from local storage', () => {
    localStorage.setItem('jwt_token', 'LS_JWT_TOKEN');

    expect(service.getToken()).toEqual('LS_JWT_TOKEN');
  });

  it('should clear token from local storage', () => {
    service.clearToken();

    expect(localStorage.getItem('jwt_token')).toEqual(null);
  });
});
