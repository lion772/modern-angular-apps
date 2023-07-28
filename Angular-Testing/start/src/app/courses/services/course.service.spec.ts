import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";
import { Course } from "../model/course";
import { COURSES } from "../../../../server/db-data";

describe("CourseService", () => {
  let courseService: CoursesService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService],
    });

    courseService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("should retrieve all courses", () => {
    courseService.findAllCourses().subscribe((courses: Course[]) => {
      expect(courses).toBeTruthy("No Courses returned");

      expect(courses.length).toBe(12, "Incorrect number of courses");

      const course = courses.find((course) => course.id === 12);

      expect(course.titles.description).toBe("Angular Testing Course");
    });

    const req = httpTestingController.expectOne("/api/courses");

    expect(req.request.method).toEqual("GET");

    //Get array of courses from db-data
    req.flush({ payload: Object.values(COURSES) });
  });

  it("should find a course by id", () => {
    courseService.findCourseById(12).subscribe((course) => {
      expect(course).toBeTruthy();
      expect(course.id).toBe(12);
    });

    const req = httpTestingController.expectOne("/api/courses/12");

    expect(req.request.method).toEqual("GET");

    req.flush(COURSES[12]);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
});
