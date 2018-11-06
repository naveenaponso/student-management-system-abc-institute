import { TestBed } from '@angular/core/testing';

import { LecturerRegistrationService } from './lecturer-registration.service';

describe('LecturerRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturerRegistrationService = TestBed.get(LecturerRegistrationService);
    expect(service).toBeTruthy();
  });
});
