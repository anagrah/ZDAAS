import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSummarySynonymComponent } from './view-all-summary-synonym.component';

describe('ViewAllSummarySynonymComponent', () => {
  let component: ViewAllSummarySynonymComponent;
  let fixture: ComponentFixture<ViewAllSummarySynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSummarySynonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSummarySynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
