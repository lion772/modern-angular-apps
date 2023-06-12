import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailResponse, EmailService } from '../email.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent implements OnInit {
  public emailProps!: EmailResponse;
  public constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  public ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => this.emailService.getEmailById(params['emailId']))
      )
      .subscribe((emailResponse) => {
        const httpTagIndex = emailResponse.text.indexOf('<');
        const emailText = emailResponse.text.substring(0, httpTagIndex);
        this.emailProps = {
          ...emailResponse,
          text: emailText,
        };
      });
  }
}
