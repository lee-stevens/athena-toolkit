import { TestBed } from '@angular/core/testing';

import { AthenaSharedService } from './athena-shared.service';

describe('AthenaSharedService', () => {
  let service: AthenaSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthenaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
