import { AfterViewInit, Component, Input } from '@angular/core';
import { Course } from 'src/app/app.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent {
  @Input()
  course!: Course;
}
