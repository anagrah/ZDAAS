import { TestBed } from '@angular/core/testing';

import { UserManagementWebapiService } from './user-management-webapi.service';

describe('UserManagementWebapiService', () => {
  let service: UserManagementWebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagementWebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
