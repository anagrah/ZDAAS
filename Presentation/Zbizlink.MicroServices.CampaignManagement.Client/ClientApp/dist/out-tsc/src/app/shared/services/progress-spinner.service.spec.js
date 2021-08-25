import { TestBed } from '@angular/core/testing';
import { ProgressSpinnerService } from './progress-spinner.service';
describe('ProgressSpinnerService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProgressSpinnerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=progress-spinner.service.spec.js.map