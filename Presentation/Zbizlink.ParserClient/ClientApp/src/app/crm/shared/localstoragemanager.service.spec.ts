import { TestBed } from '@angular/core/testing';

import { LocalstoragemanagerService } from './localstoragemanager.service';

describe('LocalstoragemanagerService', () => {
  let service: LocalstoragemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoragemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
