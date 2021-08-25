import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityLinkComponent } from './opportunity-link.component';

describe('OpportunityLinkComponent', () => {
  let component: OpportunityLinkComponent;
  let fixture: ComponentFixture<OpportunityLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
