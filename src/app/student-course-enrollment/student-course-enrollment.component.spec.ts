import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseEnrollmentComponent } from './student-course-enrollment.component';

describe('StudentCourseEnrollmentComponent', () => {
  let component: StudentCourseEnrollmentComponent;
  let fixture: ComponentFixture<StudentCourseEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
