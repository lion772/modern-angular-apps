import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailsResponse } from '../email';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public emailList$: Observable<EmailsResponse[]> =
    this.emailService.getEmails();

  public constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {}
}
