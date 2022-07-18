import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { role } from 'src/app/core/types/role';

@Component({
  selector: 'tq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  get login() {
    return this.form.controls['login'];
  }

  get password() {
    return this.form.controls['password'];
  }

  submit() {
    this.authService.login(this.form.value).subscribe({
      next: (res) => {
        this.tokenService.setToken(res.token);
        this.redirectUser(this.tokenService.getUserRole());
      },
      error: (err) => {
        console.error(err.error.error_message);
      },
    });
  }

  guest() {
    this.authService.guest().subscribe({
      next: (res) => {
        this.tokenService.setToken(res.token);
        this.router.navigate(['/quizzes']);
      },
      error: (err) => {
        console.error(err.error.error_message);
      },
    });
  }

  redirectUser(role: role | null) {
    if (!role) return;
    if (role === 'ROLE_ADMIN') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/quizzes']);
    }
  }
}
