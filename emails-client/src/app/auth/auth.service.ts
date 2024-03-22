import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  map,
  skipWhile,
  take,
} from 'rxjs';

interface UsernameResponseAvailability {
  available: boolean;
}

interface UsernameResponse {
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
  private _username = '';

  private userSignedin$ = new BehaviorSubject<boolean | null>(null);
  public getUserAuthentication$ = this.userSignedin$.asObservable();

  public constructor(private http: HttpClient) {}

  public setUsername(username: string): void {
    localStorage.setItem('username', username);
    this._username = username;
  }

  public getUsernameFromStorage(): string {
    const username = localStorage.getItem('username');
    return username ? username : this._username;
  }

  public checkUsernameExists(username: string) {
    return this.http
      .post<UsernameResponseAvailability>(`${this.url}/username`, {
        username,
      })
      .pipe(
        skipWhile((val) => val === null),
        take(1),
        map((val) => !!val),
        catchError(() => EMPTY),
      );
  }

  public signUp(userCredentials: FormControl) {
    return this.http
      .post<UsernameResponse>(`${this.url}/signup`, userCredentials)
      .pipe(
        map(({ username }) => {
          this.userSignedin$.next(true);
          this.setUsername(username);
          return username;
        }),
      );
  }

  public signIn(userCredentials: FormControl) {
    return this.http
      .post<UsernameResponse>(`${this.url}/signin`, userCredentials)
      .pipe(
        map(({ username }) => {
          localStorage.setItem('username', username);
          this.userSignedin$.next(true);
          this.setUsername(username);
          return username;
        }),
      );
  }

  public checkAuth() {
    return this.http.get<userAuthentication>(`${this.url}/signedin`).pipe(
      map(({ authenticated }) => {
        this.userSignedin$.next(authenticated);
      }),
    );
  }

  public signOut() {
    return this.http.post(`${this.url}/signout`, {}).pipe(
      map(() => {
        this.userSignedin$.next(false);
        localStorage.removeItem('username');
      }),
    );
  }
}
