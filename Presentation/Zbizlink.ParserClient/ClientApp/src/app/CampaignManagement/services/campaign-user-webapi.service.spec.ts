import { TestBed } from '@angular/core/testing';

import { CampaignUserWebapiService } from './campaign-user-webapi.service';

describe('CampaignUserWebapiService', () => {
  let service: CampaignUserWebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignUserWebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
