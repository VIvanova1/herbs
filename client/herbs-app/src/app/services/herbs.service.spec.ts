import { TestBed } from '@angular/core/testing';

import { HerbsService } from './herbs.service';

describe('HerbsService', () => {
  let service: HerbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
