import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { COURSES } from 'src/data';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

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
export class AppComponent implements AfterViewInit {
  public courses: Course[] = Object.values(COURSES);
  public course = this.courses[0];

  @ViewChild(CourseDetailComponent)
  courseDetailComponentInstance!: CourseDetailComponent;

  @ViewChild('courseDetailComponentRef', { read: ElementRef })
  courseDetailRef!: ElementRef;

  @ViewChild('containerRef')
  container!: ElementRef;

  @ViewChild('imageRef')
  imgRef!: ElementRef;

  @ViewChildren(CourseDetailComponent, { read: ElementRef })
  courseRefs!: QueryList<ElementRef>;

  public ngAfterViewInit(): void {
    console.log(this.courseDetailComponentInstance);
    console.log(this.courseDetailRef);
    console.log(this.container);
    console.log(this.courseRefs);
    this.courseRefs.changes.subscribe((cards) => console.log(cards));
  }

  public onClick(): void {
    this.courses.push(this.course);
  }
}
