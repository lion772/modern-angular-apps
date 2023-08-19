import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "5");
    return this.http.get<Course[]>("/api/courses", { params });
  }

  public saveCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders().set("X-Auth", "userId");
    return this.http.put<Course>("api/courses/" + course.id, course, {
      headers,
    });
  }
}
