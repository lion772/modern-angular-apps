import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EmailsResponse } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailIndexComponent implements OnChanges {
  @Input() emails!: EmailsResponse[];
  @Input() username = '';

  constructor(private emailService: EmailService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['username']) {
      this.updateUserEmail(changes['username'].currentValue);
    }
  }

  updateUserEmail(newUsername: string) {
    // Simulate an HTTP request to update the user's email on the server
    this.emailService.updateUsername(newUsername, '1').subscribe({
      next: () => console.log('Email updated successfully!'),
      error: (error) => console.log('error', error),
    });
  }
}
