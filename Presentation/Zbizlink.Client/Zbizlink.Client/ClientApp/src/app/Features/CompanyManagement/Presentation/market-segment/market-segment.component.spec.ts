import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSegmentComponent } from './market-segment.component';

describe('MarketSegmentComponent', () => {
  let component: MarketSegmentComponent;
  let fixture: ComponentFixture<MarketSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
