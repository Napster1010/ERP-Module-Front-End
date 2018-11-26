import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCourseEnrollmentComponent } from './start-course-enrollment.component';

describe('StartCourseEnrollmentComponent', () => {
  let component: StartCourseEnrollmentComponent;
  let fixture: ComponentFixture<StartCourseEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCourseEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCourseEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
