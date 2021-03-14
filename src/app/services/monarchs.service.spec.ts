import { TestBed } from '@angular/core/testing';

import { MonarchsService } from './monarchs.service';

describe('MonarchsService', () => {
  let service: MonarchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonarchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
