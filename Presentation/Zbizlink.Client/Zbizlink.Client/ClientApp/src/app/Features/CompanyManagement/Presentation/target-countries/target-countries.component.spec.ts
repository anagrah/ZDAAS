import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCountriesComponent } from './target-countries.component';

describe('TargetCountriesComponent', () => {
  let component: TargetCountriesComponent;
  let fixture: ComponentFixture<TargetCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
