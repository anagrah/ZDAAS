import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeOfRegistrationComponent } from './purpose-of-registration.component';

describe('PurposeOfRegistrationComponent', () => {
  let component: PurposeOfRegistrationComponent;
  let fixture: ComponentFixture<PurposeOfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeOfRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeOfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
