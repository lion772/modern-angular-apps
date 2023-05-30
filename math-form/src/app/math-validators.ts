import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      //const { a, b, answer } = form.value;
      const sum = parseInt(form.value[target]);
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      if (firstNumber + secondNumber === sum) {
        return null;
      }
      return { addition: true };
    };
  }
}
