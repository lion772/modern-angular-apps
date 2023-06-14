import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter();
  public emailForm!: FormGroup;

  public constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const { to, subject, html, text, from } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
      from: new FormControl({ value: from, disabled: true }),
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
