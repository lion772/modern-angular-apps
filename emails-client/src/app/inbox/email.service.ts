import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

export interface EmailsResponse {
  id: string;
  subject: string;
  from: string;
}

export interface EmailResponse {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public rootUrl = 'https://api.angular-email.com';

  public constructor(private http: HttpClient) {}

  public getEmails(): Observable<EmailsResponse[]> {
    return this.http.get<EmailsResponse[]>(`${this.rootUrl}/emails`);
  }

  public getEmailById(emailId: string): Observable<EmailResponse> {
    return this.http.get<EmailResponse>(`${this.rootUrl}/emails/${emailId}`);
  }
}
