import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  public onSubmitForm(event: Event): void {
    event.preventDefault();
  }

  public get username(): string | null | undefined {
    return this.signupForm.value.username;
  }
  public get password(): string | null | undefined {
    return this.signupForm.value.password;
  }
}
