import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss'],
})
export class EmailReplyComponent implements OnInit {
  public showModal = false;
  @Input() email!: Email;

  public constructor(private emailService: EmailService) {}

  public ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    console.log(this.email);
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------- ${this.email.from} wrote:\n>${text}`,
    };
  }

  public onSubmitEmailForm(emailSubmitted: Email) {
    this.emailService
      .sendEmail(emailSubmitted)
      .subscribe({ next: () => (this.showModal = false) });
  }
}
