import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Email, EmailsResponse } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public rootUrl = 'https://api.angular-email.com';

  public constructor(private http: HttpClient) {}

  public getEmails(): Observable<EmailsResponse[]> {
    return this.http.get<EmailsResponse[]>(`${this.rootUrl}/emails`);
  }

  public getEmailById(emailId: string): Observable<Email> {
    return this.http.get<Email>(`${this.rootUrl}/emails/${emailId}`);
  }

  public sendEmail(email: Email): Observable<any> {
    return this.http.post(`${this.rootUrl}/emails`, email).pipe(
      map((res) => {
        console.log(res);
      })
    );
  }
}
