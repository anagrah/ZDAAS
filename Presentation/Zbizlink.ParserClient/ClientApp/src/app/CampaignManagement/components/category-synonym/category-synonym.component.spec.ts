import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySynonymComponent } from './category-synonym.component';

describe('CategorySynonymComponent', () => {
  let component: CategorySynonymComponent;
  let fixture: ComponentFixture<CategorySynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySynonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
