import { Component, Input } from '@angular/core';
import { EmailsResponse } from '../email';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss'],
})
export class EmailIndexComponent {
  @Input() emails!: EmailsResponse[];
}
