import { TestBed } from '@angular/core/testing';
import { RFPManipulationWebApiService } from './rfpmanipulation-web-api.service';
describe('RFPManipulationWebApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RFPManipulationWebApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rfpmanipulation-web-api.service.spec.js.map