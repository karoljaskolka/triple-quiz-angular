import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../dtos/login';
import { RegisterDto } from '../dtos/register';

const apiUrl = environment.apiUrl;

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send call POST /api/auth/login with request body', () => {
    const data = { login: 'John123', password: 'qwerty123' } as LoginDto;

    service.login(data).subscribe();

    const req = httpMock.expectOne(apiUrl + '/api/auth/login');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(data);
  });

  it('should send call POST /api/auth/register with request body', () => {
    const data = { login: 'John123', password: 'qwerty123' } as RegisterDto;

    service.register(data).subscribe();

    const req = httpMock.expectOne(apiUrl + '/api/auth/register');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(data);
  });

  it('should send call POST /api/auth/guest', () => {
    const data = {};

    service.guest().subscribe();

    const req = httpMock.expectOne(apiUrl + '/api/auth/guest');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(data);
  });
});
