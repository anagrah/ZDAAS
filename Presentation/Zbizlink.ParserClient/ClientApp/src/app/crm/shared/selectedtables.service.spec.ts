import { TestBed } from '@angular/core/testing';

import { SelectedTablesService } from './selectedtables.service';

describe('SelectedtablesService', () => {
  let service: SelectedTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
