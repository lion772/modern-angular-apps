import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  public constructor(private authService: AuthService) {}

  public onSubmitForm(): void {
    this.authService.signIn(this.signinValue).subscribe({
      next: () => {
        // Navigate away
      },
      error: (err) => {
        const { status } = err;
        if (!status) {
          this.signinForm.setErrors({
            noConnection: true,
          });
        } else if (status === 422) {
          this.signinForm.setErrors({
            wrongCredentials: true,
          });
        } else {
          this.signinForm.setErrors({
            unknownError: true,
          });
        }
      },
    });
  }

  public get username(): FormControl {
    return this.signinForm.get('username') as FormControl;
  }
  public get password(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  public get signinValue(): FormControl {
    return this.signinForm.value as FormControl;
  }
}
