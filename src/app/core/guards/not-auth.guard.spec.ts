import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator/jest';
import { TokenService } from '../services/token.service';
import { Role } from '../types/role';
import { NotAuthGuard } from './not-auth.guard';

describe('NotAuthGuard', () => {
  let guard: SpectatorService<NotAuthGuard>;
  let tokenService: SpyObject<TokenService>;
  const createService = createServiceFactory({
    service: NotAuthGuard,
    mocks: [TokenService],
    imports: [RouterTestingModule],
  });

  beforeEach(() => {
    guard = createService();
    tokenService = guard.inject(TokenService);
  });

  it('should create guard', () => {
    expect(guard).toBeTruthy();
  });

  it('should not return true for admin user', () => {
    tokenService.getToken.andReturn('token');
    tokenService.getUserRole.andReturn(Role.ROLE_ADMIN);

    const res = guard.service.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(res).not.toBe(true);
  });

  it('should not return true for guest user', () => {
    tokenService.getToken.andReturn('token');
    tokenService.getUserRole.andReturn(Role.ROLE_GUEST);

    const res = guard.service.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(res).not.toBe(true);
  });

  it('should not return true for logged user', () => {
    tokenService.getToken.andReturn('token');
    tokenService.getUserRole.andReturn(Role.ROLE_USER);

    const res = guard.service.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(res).not.toBe(true);
  });

  it('should return true for not logged user', () => {
    tokenService.getToken.andReturn(null);
    tokenService.getUserRole.andReturn(null);

    const res = guard.service.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(res).toBe(true);
  });
});
