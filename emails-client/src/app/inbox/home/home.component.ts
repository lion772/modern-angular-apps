import { Component, OnInit } from '@angular/core';
import { EmailService, EmailsResponse } from '../email.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public emailList$: Observable<EmailsResponse[] | null> =
    this.emailService.getEmails();

  public constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {}
}
