import { Component } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent {
  public showModal = false;
  public email!: Email;
  public constructor() {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: 'test@gmail.com',
    };
  }
}
