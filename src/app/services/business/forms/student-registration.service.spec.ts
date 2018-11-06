import { TestBed } from '@angular/core/testing';

import { StudentRegistrationFormService } from './student-registration.service';

describe('StudentRegistrationFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRegistrationFormService = TestBed.get(StudentRegistrationFormService);
    expect(service).toBeTruthy();
  });
});
