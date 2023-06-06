import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UsernameResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(private http: HttpClient) {}

  public checkUsernameExists(username: string): Observable<UsernameResponse> {
    return this.http.post<UsernameResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }
}
