import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  public constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
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
      })
    );
  };
}
