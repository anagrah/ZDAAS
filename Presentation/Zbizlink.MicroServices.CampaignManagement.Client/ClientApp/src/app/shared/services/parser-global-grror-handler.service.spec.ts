import { TestBed } from '@angular/core/testing';

import { ParserGlobalGrrorHandlerService } from './parser-global-grror-handler.service';

describe('ParserGlobalGrrorHandlerService', () => {
  let service: ParserGlobalGrrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParserGlobalGrrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
