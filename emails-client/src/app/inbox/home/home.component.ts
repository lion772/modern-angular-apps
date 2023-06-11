import { Component, OnInit } from '@angular/core';
import { EmailService, EmailsResponse } from '../email.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public emailList$: Observable<EmailsResponse[] | null> =
    this.emailService.getEmails();

  public constructor(private emailService: EmailService) {}

  public ngOnInit(): void {}
}
