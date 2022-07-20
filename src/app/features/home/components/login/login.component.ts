import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { TokenService } from '../../../../core/services/token.service';
import { Role } from '../../../../core/types/role';

@Component({
  selector: 'tq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loading$ = this.authService.loading$;

  form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  get login() {
    return this.form.controls['login'];
  }

  get password() {
    return this.form.controls['password'];
  }

  submit() {
    this.authService.login(this.form.value).subscribe((res) => {
      this.tokenService.setToken(res.token);
      this.redirectUser(this.tokenService.getUserRole());
      this.notificationService.success('success.login');
    });
  }

  guest() {
    this.authService.guest().subscribe((res) => {
      this.tokenService.setToken(res.token);
      this.router.navigate(['/quizzes']);
      this.notificationService.success('success.guest');
    });
  }

  redirectUser(role: Role | null) {
    if (!role) return;
    if (role === Role.ROLE_ADMIN) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/quizzes']);
    }
  }
}
