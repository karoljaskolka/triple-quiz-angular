import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { TokenService } from '../../../../core/services/token.service';
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

  constructor(private tokenService: TokenService, private router: Router) {}

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/']);
  }
}
