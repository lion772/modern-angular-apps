import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

export interface Course {
  iconUrl: string;
  id: string;
  titles: { description: string; longDescription: string };
  category: string;
  seqNo: number;
  url: string;
  lessonsCount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  public courses: Course[] = [];
  public courses$!: Observable<Course[]>;

  @ViewChild(CourseDetailComponent)
  courseDetailComponentInstance!: CourseDetailComponent;

  @ViewChild('courseDetailComponentRef', { read: ElementRef })
  courseDetailRef!: ElementRef;

  @ViewChildren(CourseDetailComponent, { read: ElementRef })
  courseRefs!: QueryList<ElementRef>;

  public constructor(public coursesService: CoursesService) {}

  public ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  public ngAfterViewInit(): void {
    console.log(this.courseDetailComponentInstance);
    console.log(this.courseDetailRef);
    console.log(this.courseRefs);
    this.courseRefs.changes.subscribe((cards) => console.log(cards));
  }

  ngAfterContentInit(): void {}

  public onClick(): void {
    const newCourse = {
      id: '12',
      titles: {
        description: 'Angular Testing Course',
        longDescription:
          'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
      },
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
      category: 'BEGINNER',
      seqNo: 0,
      url: 'angular-testing-course',
      lessonsCount: 10,
    };
    this.courses.push(newCourse);
  }
}
