import { Component, OnInit, Self } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UniqueUsername, MatchPassword],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  public constructor(
    @Self() private matchPassword: MatchPassword,
    @Self() private uniqueUsername: UniqueUsername,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeSignupForm();
  }

  private initializeSignupForm() {
    this.signupForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.pattern(/^[a-z0-9]+$/),
          ],
          [
            this.uniqueUsername.validate,
            this.uniqueUsername.validateCharacter('*'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        passwordConfirmation: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
      },
      { updateOn: 'blur', validators: [this.matchPassword.validate] },
    );
  }

  public onSubmitForm() {
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
