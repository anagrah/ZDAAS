import { TestBed } from '@angular/core/testing';

import { EmailServiceWebapiService } from './email-service-webapi.service';

describe('EmailServiceWebapiService', () => {
  let service: EmailServiceWebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServiceWebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
