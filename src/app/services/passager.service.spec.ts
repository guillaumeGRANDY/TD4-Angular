import { TestBed } from '@angular/core/testing';

import { PassagerService } from './passager.service';

describe('PassagerServiceService', () => {
  let service: PassagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
