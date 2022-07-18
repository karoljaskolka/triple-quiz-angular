import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from './validators';

describe('Validators', () => {
  let form: FormGroup;

  it('should set matchPassword error when passwords do not match', () => {
    form = new FormGroup(
      {
        password: new FormControl('pass123'),
        matchPassword: new FormControl('123pass'),
      },
      matchPassword('password', 'matchPassword')
    );

    expect(form.controls['matchPassword'].errors).toBeTruthy();
    expect(
      form.controls['matchPassword'].errors?.['matchPassword']
    ).toBeTruthy();
  });

  it('should not set matchPassword error when passwords do not match, but other validators are failing', () => {
    form = new FormGroup(
      {
        password: new FormControl('pass123'),
        matchPassword: new FormControl('123pass', Validators.minLength(8)),
      },
      matchPassword('password', 'matchPassword')
    );

    expect(form.controls['matchPassword'].errors).toBeTruthy();
    expect(
      form.controls['matchPassword'].errors?.['matchPassword']
    ).toBeFalsy();
    expect(form.controls['matchPassword'].errors?.['minlength']).toBeTruthy();
  });

  it('should not set matchPassword error when passwords match', () => {
    form = new FormGroup(
      {
        password: new FormControl('pass123'),
        matchPassword: new FormControl('pass123'),
      },
      matchPassword('password', 'matchPassword')
    );

    expect(form.controls['matchPassword'].errors).toBeFalsy();
  });
});
