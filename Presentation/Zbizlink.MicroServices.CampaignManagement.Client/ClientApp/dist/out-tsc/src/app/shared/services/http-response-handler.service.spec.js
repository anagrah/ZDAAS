import { TestBed } from '@angular/core/testing';
import { HttpResponseHandlerService } from './http-response-handler.service';
describe('HttpResponseHandlerService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpResponseHandlerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-response-handler.service.spec.js.map