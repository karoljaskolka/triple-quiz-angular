import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { NotificationService, TokenService } from '../../../../core/services';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  faAngular = faAngular;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/']);
    this.notificationService.success('success.logout');
  }
}
