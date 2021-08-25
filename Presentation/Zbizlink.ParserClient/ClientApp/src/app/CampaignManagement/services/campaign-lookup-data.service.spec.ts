import { TestBed } from '@angular/core/testing';

import { CampaignLookupDataService } from './campaign-lookup-data.service';

describe('CampaignLookupDataService', () => {
  let service: CampaignLookupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignLookupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
