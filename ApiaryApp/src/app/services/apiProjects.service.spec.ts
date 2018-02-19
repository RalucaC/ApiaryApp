import { TestBed, inject } from '@angular/core/testing';

import { ApisService } from './apiProjects.service';

describe('ApisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApisService]
    });
  });

  it('should be created', inject([ApisService], (service: ApisService) => {
    expect(service).toBeTruthy();
  }));
});
