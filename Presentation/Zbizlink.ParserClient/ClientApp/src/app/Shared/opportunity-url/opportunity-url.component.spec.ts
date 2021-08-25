import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityUrlComponent } from './opportunity-url.component';

describe('OpportunityUrlComponent', () => {
  let component: OpportunityUrlComponent;
  let fixture: ComponentFixture<OpportunityUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
