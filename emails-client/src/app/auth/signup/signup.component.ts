import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

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
    private uniqueUsername: UniqueUsername
  ) {}

  ngOnInit(): void {}

  public onSubmitForm(event: Event): void {
    event.preventDefault();
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
}
