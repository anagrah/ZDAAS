import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryFieldComponent } from './add-category-field.component';

describe('AddCategoryFieldComponent', () => {
  let component: AddCategoryFieldComponent;
  let fixture: ComponentFixture<AddCategoryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
