import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSummarySynonymsComponent } from './add-edit-summary-synonyms.component';

describe('AddEditSummarySynonymsComponent', () => {
  let component: AddEditSummarySynonymsComponent;
  let fixture: ComponentFixture<AddEditSummarySynonymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSummarySynonymsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSummarySynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
