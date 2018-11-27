import { TestBed, inject } from '@angular/core/testing';

import { SchoolClassService } from './school-class.service';

describe('SchoolClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolClassService]
    });
  });

  it('should be created', inject([SchoolClassService], (service: SchoolClassService) => {
    expect(service).toBeTruthy();
  }));
});
