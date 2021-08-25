import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySynonymMoveComponent } from './summary-synonym-move.component';

describe('SummarySynonymMoveComponent', () => {
  let component: SummarySynonymMoveComponent;
  let fixture: ComponentFixture<SummarySynonymMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySynonymMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySynonymMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
