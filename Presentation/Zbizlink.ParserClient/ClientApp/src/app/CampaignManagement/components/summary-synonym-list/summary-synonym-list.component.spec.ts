import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySynonymListComponent } from './summary-synonym-list.component';

describe('SummarySynonymListComponent', () => {
  let component: SummarySynonymListComponent;
  let fixture: ComponentFixture<SummarySynonymListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySynonymListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySynonymListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
