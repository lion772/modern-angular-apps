import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from './app.component';

interface HttpResponse {
  courses: any;
}

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get<HttpResponse>('assets/data.json').pipe(
      map(({ courses }) => {
        return Object.values(courses);
      })
    );
  }
}
