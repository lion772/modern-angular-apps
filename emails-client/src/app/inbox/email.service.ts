import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email, EmailsResponse } from './email';

interface UsernameResponse {
  username: string;
}

@Injectable()
export class EmailService {
  public rootUrl = 'https://api.angular-email.com';

  public constructor(private http: HttpClient) {}

  public getEmails() {
    return this.http.get<EmailsResponse[]>(`${this.rootUrl}/emails`);
  }

  public getEmailById(emailId: string): Observable<Email> {
    return this.http.get<Email>(`${this.rootUrl}/emails/${emailId}`);
  }

  public sendEmail(email: Email): Observable<UsernameResponse> {
    return this.http.post<UsernameResponse>(`${this.rootUrl}/emails`, email);
  }

  public updateUsername(
    newUsername: string,
    emailId: string,
  ): Observable<UsernameResponse | null> {
    return this.http.put<UsernameResponse>(
      `${this.rootUrl}/emails/${emailId}`,
      { username: newUsername },
    );
  }
}
