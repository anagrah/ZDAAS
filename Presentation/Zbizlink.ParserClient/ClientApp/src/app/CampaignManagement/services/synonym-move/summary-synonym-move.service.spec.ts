import { TestBed } from '@angular/core/testing';

import { SummarySynonymMoveService } from './summary-synonym-move.service';

describe('SummarySynonymMoveService', () => {
  let service: SummarySynonymMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummarySynonymMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
