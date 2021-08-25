import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { MarketingCampaignComponent } from './marketing-campaign.component';
describe('MarketingCampaignComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [MarketingCampaignComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MarketingCampaignComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=marketing-campaign.component.spec.js.map