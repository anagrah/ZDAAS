import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSynonymsComponent } from './add-edit-synonyms.component';

describe('AddEditSynonymsComponent', () => {
  let component: AddEditSynonymsComponent;
  let fixture: ComponentFixture<AddEditSynonymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSynonymsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
