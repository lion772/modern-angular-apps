import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Course } from 'src/app/app.component';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements AfterViewInit, AfterContentInit {
  @Input()
  course!: Course;

  @ContentChild('imageRef')
  imageRef!: ElementRef;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  imagesRef!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log('Course Detail instance: ', this.imageRef);
  }

  ngAfterContentInit(): void {
    console.log('IMAGE REFERENCES: ', this.imagesRef);
  }
}
