import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmailService } from './email.service';
import { EMAILS } from './db-data';

describe('EmailService', () => {
  let emailService: EmailService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService],
    });
    emailService = TestBed.inject(EmailService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get emails', () => {
    emailService.getEmails().subscribe((emails) => {
      expect(emails).toBeTruthy();
    });

    const req = httpTestingController.expectOne(
      'https://api.angular-email.com/emails',
    );

    expect(req.request.method).toBe('GET');

    req.flush({
      payload: EMAILS,
    });
  });
});
