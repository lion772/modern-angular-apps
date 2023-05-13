import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface User {
  id: string;
  name: string;
  age: number;
  job: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<User[]> {
    return this.http.get<any>('/assets/data.json').pipe(
      map((res) => {
        return res.obj.map((list: User) => list);
      })
    );
  }
}
