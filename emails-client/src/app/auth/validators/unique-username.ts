import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate(control: AbstractControl) {
    const { value } = control;

    return this.authService.checkUsernameExists(value).pipe(
      //if response status equals to 200, it returns Observable<null>
      map(() => null),
      catchError(({ error }) => {
        if (error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      }),
    );
  }

  validateCharacter(invalidCharacter: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;

      if (value.includes(invalidCharacter)) {
        return {
          invalidCharacter: true,
        };
      } else {
        return null;
      }
    };
  }
}
