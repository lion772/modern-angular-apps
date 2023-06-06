import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

interface UsernameResponse {
  available: boolean;
}

interface UserRequest {
  username: string;
}

interface UserForm {
  username: string;
  password: string;
  passwordConfirmation: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.angular-email.com/auth';
  public constructor(private http: HttpClient) {}

  public checkUsernameExists(username: string): Observable<UsernameResponse> {
    return this.http.post<UsernameResponse>(`${this.url}/username`, {
      username,
    });
  }

  public signUp(userCredentials: FormControl): Observable<UserRequest | any[]> {
    return this.http
      .post<UserRequest>(`${this.url}/signup`, userCredentials)
      .pipe(
        map((value) => value),
        catchError(() => of([]))
      );
  }
}
