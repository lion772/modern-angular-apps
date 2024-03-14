import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter();
  public emailForm!: FormGroup;
  public emailFormKeys = ['from', 'to', 'subject', 'text'];

  public constructor(private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this.emailForm = this._fb.group({});
    this.emailFormKeys.forEach((key) => {
      switch (key) {
        case 'to':
          this.emailForm.addControl(
            key,
            new FormControl('', [Validators.required, Validators.email]),
          );
          break;
        case 'from':
          this.emailForm.addControl(
            key,
            new FormControl({ value: this.email.from, disabled: true }),
          );
          break;
        default:
          this.emailForm.addControl(
            key,
            new FormControl('', [Validators.required]),
          );
          break;
      }
      this.emailForm.addControl(
        key,
        new FormControl('', [Validators.required]),
      );
    });
  }

  public onSubmit() {
    this.emailSubmit.emit(this.emailForm.value);
  }

  public get to(): FormControl {
    return this.emailForm.get('to') as FormControl;
  }

  public get subject(): FormControl {
    return this.emailForm.get('subject') as FormControl;
  }

  public get text(): FormControl {
    return this.emailForm.get('text') as FormControl;
  }

  public get from(): FormControl {
    return this.emailForm.get('from') as FormControl;
  }
}
