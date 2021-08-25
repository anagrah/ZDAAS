import { TestBed } from '@angular/core/testing';

import { ApiCallRetryFacadeService } from './api-call-retry-facade.service';

describe('ApiCallRetryFacadeService', () => {
  let service: ApiCallRetryFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallRetryFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
