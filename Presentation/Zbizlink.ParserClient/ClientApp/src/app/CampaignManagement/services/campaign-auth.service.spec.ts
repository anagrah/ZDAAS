import { TestBed } from '@angular/core/testing';

import { CampaignAuthService } from './campaign-auth.service';

describe('CampaignAuthService', () => {
  let service: CampaignAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
