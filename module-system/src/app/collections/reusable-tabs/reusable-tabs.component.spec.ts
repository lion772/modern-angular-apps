import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTabsComponent } from './reusable-tabs.component';

describe('ReusableTabsComponent', () => {
  let component: ReusableTabsComponent;
  let fixture: ComponentFixture<ReusableTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableTabsComponent]
    });
    fixture = TestBed.createComponent(ReusableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
