import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSynonymListsComponent } from './view-all-synonym-lists.component';

describe('ViewAllSynonymListsComponent', () => {
  let component: ViewAllSynonymListsComponent;
  let fixture: ComponentFixture<ViewAllSynonymListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSynonymListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSynonymListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
