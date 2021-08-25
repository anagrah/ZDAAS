import { TestBed } from '@angular/core/testing';

import { RFPManipulationWebApiService } from './rfpmanipulation-web-api.service';

describe('RFPManipulationWebApiService', () => {
  let service: RFPManipulationWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RFPManipulationWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
