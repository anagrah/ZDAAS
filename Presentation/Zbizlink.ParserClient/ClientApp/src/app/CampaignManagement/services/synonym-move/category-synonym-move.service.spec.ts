import { TestBed } from '@angular/core/testing';

import { CategorySynonymMoveService } from './category-synonym-move.service';

describe('CategorySynonymMoveService', () => {
  let service: CategorySynonymMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySynonymMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
