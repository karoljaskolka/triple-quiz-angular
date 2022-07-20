import {
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator/jest';
import { of, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let spec: SpectatorService<AuthInterceptor>;
  let tokenService: SpyObject<TokenService>;
  let requestMock = new HttpRequest('GET', '/api/quizzes', {
    headers: new HttpHeaders(),
  });

  const createService = createServiceFactory({
    service: AuthInterceptor,
    mocks: [TokenService],
    imports: [RouterTestingModule],
  });

  beforeEach(() => {
    spec = createService();
    tokenService = spec.inject(TokenService);
  });

  it('should not set authorization header when token does not exists', () => {
    tokenService.getToken.andReturn(null);

    const next = {
      handle(request: HttpRequest<any>) {
        expect(request.headers.get('authorization')).toEqual(null);
        return of();
      },
    };

    spec.service.intercept(requestMock, next).subscribe();
  });

  it('should set authorization header when token exists', () => {
    const JWT_TOKEN = 'jwt-token';
    tokenService.getToken.andReturn(JWT_TOKEN);

    const next = {
      handle(request: HttpRequest<any>) {
        expect(request.headers.get('authorization')).toEqual(
          `Bearer ${JWT_TOKEN}`
        );
        return of();
      },
    };

    spec.service.intercept(requestMock, next).subscribe();
  });

  it('should not call logoutWithRedirection when token does not exists', () => {
    const unauthorizedSpy = jest.spyOn(spec.service, 'logoutWithRedirection');

    spec.service
      .intercept(requestMock, {
        handle: () => throwError(() => new HttpErrorResponse({ status: 401 })),
      })
      .subscribe();

    expect(unauthorizedSpy).not.toHaveBeenCalled();
  });

  it('should call logoutWithRedirection when token exists and respone has 401 status', () => {
    const unauthorizedSpy = jest.spyOn(spec.service, 'logoutWithRedirection');

    tokenService.getToken.andReturn('token');

    spec.service
      .intercept(requestMock, {
        handle: () => throwError(() => new HttpErrorResponse({ status: 401 })),
      })
      .subscribe();

    expect(unauthorizedSpy).toHaveBeenCalled();
  });
});
