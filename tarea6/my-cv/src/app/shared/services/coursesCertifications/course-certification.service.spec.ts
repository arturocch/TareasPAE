import { TestBed } from '@angular/core/testing';

import { CourseCertificationService } from './course-certification.service';

describe('CourseCertificationService', () => {
  let service: CourseCertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
