import { TestBed } from '@angular/core/testing';

import { OfferCourseService } from './offer-course.service';

describe('OfferCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferCourseService = TestBed.get(OfferCourseService);
    expect(service).toBeTruthy();
  });
});
