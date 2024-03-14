import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup;

  public constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.signinForm = new FormGroup({
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
  }

  public onSubmitForm(): void {
    this.authService.signIn(this.signinValue).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
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
