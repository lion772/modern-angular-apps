import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent implements OnInit {
  public email!: Email;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data.subscribe(({ email }) => {
      const httpTagIndex = email.text.indexOf('<');
      const emailText = email.text.substring(0, httpTagIndex);
      this.email = {
        ...email,
        text: emailText,
      };
    });
  }
}
