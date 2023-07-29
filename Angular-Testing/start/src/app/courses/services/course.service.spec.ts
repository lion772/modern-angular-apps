import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";
import { Course } from "../model/course";
import { COURSES } from "../../../../server/db-data";
import { HttpErrorResponse } from "@angular/common/http";
import { Lesson } from "../model/lesson";

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

  it("should save the course", () => {
    const changes: Partial<Course> = { titles: { description: "New Title" } };
    courseService.saveCourse(12, changes).subscribe((savedCourse) => {
      expect(savedCourse).toBeTruthy("Course couldn't be saved");
      expect(savedCourse.id).toBe(12);
    });
    const req = httpTestingController.expectOne("/api/courses/12");

    expect(req.request.method).toEqual("PUT");

    expect(req.request.body.titles.description).toEqual(
      changes.titles.description
    );

    req.flush({ ...COURSES[12], ...changes });
  });

  it("should give an error if save course fails", () => {
    const changes: Partial<Course> = {
      titles: { description: "New Title" },
    };

    courseService.saveCourse(12, changes).subscribe({
      next: () => {
        fail("The course operation has failed");
      },
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
      },
    });
    const req = httpTestingController.expectOne("/api/courses/12");

    expect(req.request.method).toEqual("PUT");

    req.flush("Save course failed", {
      status: 500,
      statusText: "Internal Server Error",
    });
  });

  it("should find a list of lessons", () => {
    courseService.findLessons(12).subscribe((lessons: Lesson[]) => {
      expect(lessons).toBeTruthy();
      expect(lessons.length).toBe(3);
    });

    const req = httpTestingController.expectOne(
      "/api/lessons?courseId=12&filter=&sortOrder=asc&pageNumber=0&pageSize=3"
    );

    expect(req.request.method).toEqual("GET");
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
