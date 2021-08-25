import { TestBed } from '@angular/core/testing';
import { CategoryDataDownloadService } from './category-data-download.service';
describe('CategoryDataDownloadService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoryDataDownloadService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=category-data-download.service.spec.js.map