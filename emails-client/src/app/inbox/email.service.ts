import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

export interface EmailsResponse {
  id: 'string';
  subject: 'string';
  from: 'string';
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public rootUrl = 'https://api.angular-email.com';

  public constructor(private http: HttpClient) {}

  public getEmails(): Observable<EmailsResponse[] | null> {
    return this.http.get<EmailsResponse[]>(`${this.rootUrl}/emails`).pipe(
      map((res) => res),
      catchError(() => of(null))
    );
  }
}
