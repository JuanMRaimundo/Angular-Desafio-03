import { AbstractControl, ValidationErrors } from '@angular/forms';

export function mayorDeEdadValidator(
  control: AbstractControl
): ValidationErrors | null {
  const edad = control.value;
  if (edad !== null && edad <= 17) {
    return {
      menorEdad: true,
    };
  }
  return null;
}
