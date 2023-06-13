import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  @Input() email!: Email;
  public emailForm!: FormGroup;

  ngOnInit(): void {
    const { to, subject, html, text, from } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required]),
      subject: new FormControl(subject, [Validators.required]),
      html: new FormControl(html, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
      from: new FormControl(from, [Validators.required]),
    });
  }

  public get to(): FormControl {
    return this.emailForm.get('to') as FormControl;
  }

  public get subject(): FormControl {
    return this.emailForm.get('subject') as FormControl;
  }

  public get html(): FormControl {
    return this.emailForm.get('html') as FormControl;
  }

  public get text(): FormControl {
    return this.emailForm.get('text') as FormControl;
  }

  public get from(): FormControl {
    return this.emailForm.get('from') as FormControl;
  }
}
