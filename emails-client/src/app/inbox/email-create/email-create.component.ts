import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent implements OnInit {
  public showModal = false;
  public email!: Email;

  public constructor(
    private authService: AuthService,
    private emailService: EmailService,
  ) {}

  ngOnInit(): void {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: this.authService.getUsernameFromStorage() + '@angular-app.com',
    };
  }

  onSubmitEmailForm(emailSubmitted: Email) {
    this.email = { ...this.email, ...emailSubmitted };
    this.emailService
      .sendEmail(this.email)
      .subscribe({ next: () => (this.showModal = false) });
  }
}
