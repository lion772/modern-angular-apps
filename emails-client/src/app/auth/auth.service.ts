import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

interface UsernameResponseAvailability {
  available: boolean;
}

interface SignupSigninResponse {
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
  private _username: string = '';
  public userSignedin$ = new BehaviorSubject<boolean | null>(null);

  public constructor(private http: HttpClient) {}

  public setUsername(username: string): void {
    localStorage.setItem('username', username);
    this._username = username;
  }

  public getUsername(): string {
    let username = localStorage.getItem('username');
    return username ? username : this._username;
  }

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

  public signUp(userCredentials: FormControl): Observable<void> {
    return this.http
      .post<SignupSigninResponse>(`${this.url}/signup`, userCredentials)
      .pipe(
        map(({ username }) => {
          this.userSignedin$.next(true);
          this.setUsername(username);
        })
      );
  }

  public signIn(userCredentials: FormControl): Observable<void> {
    return this.http
      .post<SignupSigninResponse>(`${this.url}/signin`, userCredentials)
      .pipe(
        map(({ username }) => {
          this.userSignedin$.next(true);
          this.setUsername(username);
        })
      );
  }

  public checkAuth(): Observable<boolean> {
    return this.http.get<userAuthentication>(`${this.url}/signedin`).pipe(
      map(({ authenticated }) => {
        this.userSignedin$.next(authenticated);
        return authenticated;
      })
    );
  }

  public signOut() {
    return this.http.post(`${this.url}/signout`, {}).pipe(
      map(() => {
        this.userSignedin$.next(false);
        localStorage.removeItem('username');
      })
    );
  }
}
