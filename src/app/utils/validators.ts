import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchPassword(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) return null;

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors?.['matchPassword']
    )
      return null;

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ matchPassword: true });
      return { matchPassword: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}
