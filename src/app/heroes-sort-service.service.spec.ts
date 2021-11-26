import { TestBed } from '@angular/core/testing';

import { HeroesSortServiceService } from './heroes-sort-service.service';

describe('HeroesSortServiceService', () => {
  let service: HeroesSortServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesSortServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
