import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesBeforeMoveComponent } from './save-changes-before-move.component';

describe('SaveChangesBeforeMoveComponent', () => {
  let component: SaveChangesBeforeMoveComponent;
  let fixture: ComponentFixture<SaveChangesBeforeMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveChangesBeforeMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesBeforeMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
