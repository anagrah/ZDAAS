import { TestBed } from '@angular/core/testing';

import { AppConfigFacadeService } from './app-config-facade.service';

describe('AppConfigFacadeService', () => {
  let service: AppConfigFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
