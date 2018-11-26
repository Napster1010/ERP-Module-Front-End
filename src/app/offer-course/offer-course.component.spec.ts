import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCourseComponent } from './offer-course.component';

describe('OfferCourseComponent', () => {
  let component: OfferCourseComponent;
  let fixture: ComponentFixture<OfferCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
