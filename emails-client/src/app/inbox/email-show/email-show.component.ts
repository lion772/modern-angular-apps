import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailResponse, EmailService } from '../email.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent implements OnInit {
  public emailProps$!: Observable<EmailResponse>;
  public constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.emailProps$ = this.emailService.getEmailById(params['emailId']);
    });
  }
}
