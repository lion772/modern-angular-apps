import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable()
export class MatchPassword implements Validator {
  validate(formGroup: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
