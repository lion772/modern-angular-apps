import { Injectable } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

@Injectable()
export class MatchPassword implements Validator {
  validate(formGroup: AbstractControl) {
    const { password, passwordConfirmation } = formGroup.value;
    return password === passwordConfirmation ? null : { passwordsDontMatch: true }; 
  }
}
