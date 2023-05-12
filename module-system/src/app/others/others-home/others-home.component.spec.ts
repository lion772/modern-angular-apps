import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersHomeComponent } from './others-home.component';

describe('OthersHomeComponent', () => {
  let component: OthersHomeComponent;
  let fixture: ComponentFixture<OthersHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersHomeComponent]
    });
    fixture = TestBed.createComponent(OthersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
