import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface User {
  id: string;
  name: string;
  age: number;
  job: string;
  employed: boolean;
}

export interface Header {
  key: string;
  label: string;
}

export interface Profile {
  bio: string;
  pics: string;
  companies: string;
  links: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<User[]> {
    return this.http
      .get<any>('assets/data.json')
      .pipe(map(({ users }) => users.map((list: User) => list)));
  }

  public getHeaders(): Observable<Header[]> {
    return this.http
      .get<any>('assets/headers.json')
      .pipe(map(({ headers }) => headers.map((header: Header) => header)));
  }

  public getProfileInfomation(): Observable<Profile> {
    return this.http.get<any>('assets/profile-info.json').pipe(
      map(({ infos }) => {
        return {
          bio: infos.bio,
          pics: infos.pics,
          companies: infos.companies,
          links: infos.links,
        };
      })
    );
  }
}
