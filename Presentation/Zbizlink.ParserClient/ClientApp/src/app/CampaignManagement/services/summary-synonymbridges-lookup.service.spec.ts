import { TestBed } from '@angular/core/testing';

import { SummarySynonymbridgesLookupService } from './summary-synonymbridges-lookup.service';

describe('SummarySynonymbridgesLookupService', () => {
  let service: SummarySynonymbridgesLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummarySynonymbridgesLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
