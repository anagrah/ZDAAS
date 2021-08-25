import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySynonymComponent } from './summary-synonym.component';

describe('SummarySynonymComponent', () => {
  let component: SummarySynonymComponent;
  let fixture: ComponentFixture<SummarySynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySynonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
