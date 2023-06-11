import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public constructor(private emailService: EmailService) {}

  public ngOnInit(): void {
    this.emailService.getEmails().subscribe();
  }
}
