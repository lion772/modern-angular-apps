import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

interface EmailsResponse {
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

  public getEmails(): Observable<EmailsResponse> {
    return this.http.get<EmailsResponse>(`${this.rootUrl}/emails`).pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
  }
}
