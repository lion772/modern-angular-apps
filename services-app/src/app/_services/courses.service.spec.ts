import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";
import { Course } from "../model/course";

describe("CoursesService", () => {
  let service: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService],
    });

    service = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should retrieve courses from the API", () => {
    const mockCourses: Course[] = [
      {
        id: 1,
        description: "Description 1",
        iconUrl: "icon-url-1",
        longDescription: "Long Description 1",
        category: "Category 1",
        lessonsCount: 5,
      },
      {
        id: 2,
        description: "Description 2",
        iconUrl: "icon-url-2",
        longDescription: "Long Description 2",
        category: "Category 2",
        lessonsCount: 7,
      },
    ];

    service.getCourses().subscribe((courses) => {
      expect(courses).toEqual(mockCourses);
    });

    const req = httpTestingController.expectOne("/api/courses");
    expect(req.request.method).toEqual("GET");
    req.flush(mockCourses);
  });

  it("should save a course using PUT request", () => {
    const mockCourse: Course = {
      id: 1,
      description: "Updated Description",
      iconUrl: "updated-icon-url",
      longDescription: "Updated Long Description",
      category: "Updated Category",
      lessonsCount: 10,
    };

    service.saveCourse(mockCourse).subscribe((savedCourse) => {
      expect(savedCourse).toEqual(mockCourse);
    });

    const req = httpTestingController.expectOne("api/courses/1");
    expect(req.request.method).toEqual("PUT");
    req.flush(mockCourse);
  });
});
