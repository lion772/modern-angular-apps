import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { COURSES } from 'src/data';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

interface Course {
  iconUrl: string;
  id: string;
  titles: { description: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public courses: Course[] = [];

  ngOnInit(): void {
    this.courses = Object.values(COURSES);
  }

  @ViewChild(CourseDetailComponent)
  courseDetailComponentInstance!: CourseDetailComponent;

  @ViewChild('courseDetailComponentRef', { read: ElementRef })
  courseDetailRef!: ElementRef;

  @ViewChild('containerRef')
  container!: ElementRef;

  public onClick(): void {
    console.log(this.courseDetailComponentInstance);
    console.log(this.courseDetailRef);
    console.log(this.container);
  }
}
