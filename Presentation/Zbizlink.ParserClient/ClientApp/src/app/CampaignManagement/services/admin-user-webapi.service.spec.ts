import { TestBed } from '@angular/core/testing';

import { AdminUserWebapiService } from './admin-user-webapi.service';

describe('AdminUserWebapiService', () => {
  let service: AdminUserWebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUserWebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
