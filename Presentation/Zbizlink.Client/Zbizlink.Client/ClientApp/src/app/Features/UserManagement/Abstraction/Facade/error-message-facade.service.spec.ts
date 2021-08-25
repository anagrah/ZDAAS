import { TestBed } from '@angular/core/testing';

import { ErrorMessageFacadeService } from './error-message-facade.service';

describe('ErrorMessageFacadeService', () => {
  let service: ErrorMessageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
