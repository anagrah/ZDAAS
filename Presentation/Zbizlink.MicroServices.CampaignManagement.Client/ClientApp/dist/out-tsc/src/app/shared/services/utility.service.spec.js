import { TestBed } from '@angular/core/testing';
import { UtilityService } from './utility.service';
describe('UtilityService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UtilityService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=utility.service.spec.js.map