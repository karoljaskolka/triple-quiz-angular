import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { TokenService } from '../services/token.service';
import { Role } from '../types/role';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.tokenService.getToken()) {
      this.notificationService.warning('warning.access-denied');
      return this.router.createUrlTree(['/']);
    }
    return this.hasRole(
      route.data['roles'],
      this.tokenService.getUserRole() as Role
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(childRoute, state);
  }

  hasRole(allowedRoles: Role[], userRole: Role) {
    if (!allowedRoles.includes(userRole)) {
      this.notificationService.warning('warning.access-denied');
      return this.router.createUrlTree(['/']);
    }
    return true;
  }
}
