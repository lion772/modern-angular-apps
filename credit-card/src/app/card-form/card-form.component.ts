import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  public cardForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required, Validators.max(8)]),
    expiration: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
    ]),
  });

  public context = {
    name: this.cardForm.get('name'),
    cardNumber: this.cardForm.get('cardNumber'),
    expiration: this.cardForm.get('expiration'),
    securityCode: this.cardForm.get('securityCode'),
  };

  public ngOnInit(): void {}

  public onSubmit() {
    if (this.cardForm.valid) {
    }
  }
}
