import { TestBed } from '@angular/core/testing';

import { CampaignUtilityService } from './campaign-utility.service';

describe('CampaignUtilityService', () => {
  let service: CampaignUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
