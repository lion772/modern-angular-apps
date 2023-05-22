import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  public cardForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    expiration: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  public context = {
    name: this.cardForm.get('name') as FormControl,
    cardNumber: this.cardForm.get('cardNumber') as FormControl,
    expiration: this.cardForm.get('expiration') as FormControl,
    securityCode: this.cardForm.get('securityCode') as FormControl,
  };

  public validators = ['required', 'minlength', 'maxlength'];

  public ngOnInit(): void {}

  public onSubmit() {
    if (this.cardForm.valid) {
    }
  }
}
