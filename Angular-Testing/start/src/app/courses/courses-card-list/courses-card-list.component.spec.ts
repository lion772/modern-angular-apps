import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { CoursesModule } from "../courses.module";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { setupCourses } from "../common/setup-test-data";

describe("CoursesCardListComponent", () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display the course list", () => {
    component.courses = setupCourses();
    //console.log(el.nativeElement.outerHTML);
    fixture.detectChanges();
    //console.log(el.nativeElement.outerHTML);

    const cards = el.queryAll(By.css(".course-card"));

    expect(cards).toBeTruthy("Could not find the cards");
    expect(cards.length).toBe(12, "Unexpected number of courses");
  });

  it("should display the first course", () => {
    component.courses = setupCourses();
    const firstCard = component.courses[0];

    fixture.detectChanges();
    const card = el.query(By.css(".course-card:first-child")),
      title = el.query(By.css("mat-card-title")),
      image = el.query(By.css("img"));

    expect(card).toBeTruthy("No such card");

    expect(title.nativeElement.textContent).toBe(firstCard.titles.description);

    expect(image.nativeElement.src).toBe(firstCard.iconUrl);
  });
});
