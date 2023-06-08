import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

interface UsernameResponseAvailability {
  available: boolean;
}

interface SignupResponse {
  username: string;
}

interface userAuthentication {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.angular-email.com/auth';
  public userSignedin$ = new BehaviorSubject<boolean>(false);

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
  ): Observable<SignupResponse | null> {
    return this.http
      .post<SignupResponse>(`${this.url}/signup`, userCredentials, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          this.userSignedin$.next(true);
          return res;
        }),
        catchError(() => of(null))
      );
  }

  public checkAuth(): Observable<userAuthentication> {
    return this.http
      .get<userAuthentication>(`${this.url}/signedin`, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          console.log(res);
          this.userSignedin$.next(true);
          return res;
        })
      );
  }
}
