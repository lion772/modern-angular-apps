import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent implements OnInit, OnDestroy {
  public email!: Email;
  public subscription!: Subscription;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.subscription = this.route.data.subscribe(({ email }) => {
      const httpTagIndex = email.text.indexOf('<');
      const emailText = email.text.substring(0, httpTagIndex);
      this.email = {
        ...email,
        text: emailText,
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
