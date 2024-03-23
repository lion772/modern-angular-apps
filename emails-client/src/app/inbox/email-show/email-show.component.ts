import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent implements OnInit {
  public email$!: Observable<Email>;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.email$ = this.route.data.pipe(
      map(({ email }) => {
        const httpTagIndex = email.text.indexOf('<');
        const emailText = email.text.substring(0, httpTagIndex);
        return { ...email, text: emailText };
      }),
    );
  }
}
