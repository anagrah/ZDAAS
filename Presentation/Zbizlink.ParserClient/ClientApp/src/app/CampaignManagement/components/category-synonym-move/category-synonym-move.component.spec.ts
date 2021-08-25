import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySynonymMoveComponent } from './category-synonym-move.component';

describe('CategorySynonymMoveComponent', () => {
  let component: CategorySynonymMoveComponent;
  let fixture: ComponentFixture<CategorySynonymMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySynonymMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySynonymMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
