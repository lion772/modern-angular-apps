import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

interface UsernameResponseAvailability {
  available: boolean;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.angular-email.com/auth';
  public constructor(private http: HttpClient) {}

  public checkUsernameExists(
    username: string
  ): Observable<UsernameResponseAvailability> {
    return this.http.post<UsernameResponseAvailability>(
      `${this.url}/username`,
      {
        username,
      }
    );
  }

  public signUp(
    userCredentials: FormControl
  ): Observable<SignupResponse | any[]> {
    return this.http
      .post<SignupResponse>(`${this.url}/signup`, userCredentials)
      .pipe(
        map((value) => value),
        catchError(() => of([]))
      );
  }
}
