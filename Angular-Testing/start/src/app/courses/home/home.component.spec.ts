import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesModule } from "../courses.module";
import { HomeComponent } from "./home.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { CoursesService } from "../services/courses.service";
import { setupCourses } from "../common/setup-test-data";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { click } from "../common/test-utils";

fdescribe("HomeComponent", () => {
  let component: HomeComponent,
    fixture: ComponentFixture<HomeComponent>,
    el: DebugElement;

  let coursesService: any;

  const beginnerCourseList = setupCourses().filter(
    (course) => course.category === "BEGINNER"
  );
  const advancedCourseList = setupCourses().filter(
    (course) => course.category === "ADVANCED"
  );

  beforeEach(waitForAsync(() => {
    const coursesServiceSpy = jasmine.createSpyObj("CoursesService", [
      "findAllCourses",
    ]);

    TestBed.configureTestingModule({
      imports: [CoursesModule, NoopAnimationsModule],
      providers: [{ provide: CoursesService, useValue: coursesServiceSpy }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        coursesService = TestBed.inject(CoursesService);
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy("could not create a component");
  });

  it("should display only beginner courses", () => {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourseList));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css(".mdc-tab"));

    expect(tabs.length).toBe(1, "Unexpected number of tabs");
  });

  it("should display only advanced courses", () => {
    coursesService.findAllCourses.and.returnValue(of(advancedCourseList));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css(".mdc-tab"));

    expect(tabs.length).toBe(1, "Unexpected number of tabs");
  });

  it("should display both tabs", () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css(".mdc-tab"));

    expect(tabs.length).toBe(2, "Expected to find 2 tabs");
  });

  it("should display advanced courses when tab clicked", (done: DoneFn) => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));

    fixture.detectChanges();

    const tabs = el.queryAll(By.css(".mdc-tab"));

    click(tabs[1]); //tabs[1].nativeElement.click()
    fixture.detectChanges();

    setTimeout(() => {
      const cardTitles = el.queryAll(By.css(".mat-mdc-card-title"));
      expect(cardTitles.length).toBeGreaterThan(
        0,
        "Could not find card titles"
      );
      expect(cardTitles[0].nativeElement.textContent).toContain(
        "Angular Security Course"
      );
      done();
    }, 500);
  });
});
