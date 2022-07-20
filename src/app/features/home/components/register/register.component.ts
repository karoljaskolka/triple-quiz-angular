import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { matchPassword } from '../../../../utils/validators';

@Component({
  selector: 'tq-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  loading$ = this.authService.loading$;

  form: FormGroup = new FormGroup(
    {
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    matchPassword('password', 'confirmPassword')
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  get login() {
    return this.form.controls['login'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }

  submit() {
    const data = {
      login: this.login.value,
      password: this.password.value,
    };
    this.authService.register(data).subscribe(() => {
      this.router.navigate(['/']);
      this.notificationService.success('success.register');
    });
  }
}
