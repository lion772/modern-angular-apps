import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  public constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmitForm(): void {
    this.authService.signUp(this.signupValue).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        const { status } = err;
        if (!status) {
          this.signupForm.setErrors({
            noConnection: true,
          });
        } else {
          this.signupForm.setErrors({
            unknownError: true,
          });
        }
      },
    });
  }

  public get username(): FormControl {
    return this.signupForm.get('username') as FormControl;
  }
  public get password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }
  public get passwordConfirmation(): FormControl {
    return this.signupForm.get('passwordConfirmation') as FormControl;
  }
  public get signupValue(): FormControl {
    return this.signupForm.value as FormControl;
  }
}
