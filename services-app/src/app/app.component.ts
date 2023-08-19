import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Provider,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { CoursesService } from "./_services/courses.service";
import { HttpClient } from "@angular/common/http";

function coursesProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

const COURSES_SERVICE = new InjectionToken<CoursesService>("courses-token");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesProvider,
      deps: [HttpClient],
    },
  ],
})
export class AppComponent implements OnInit {
  public courses$!: Observable<Course[]>;
  public savedCourse$!: Observable<Course>;

  constructor(
    @Inject(COURSES_SERVICE) private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
  }

  save(course: Course) {
    this.savedCourse$ = this.coursesService.saveCourse(course);
    this.savedCourse$.subscribe((course) => {
      console.log("saved course", course);
    });
  }
}
