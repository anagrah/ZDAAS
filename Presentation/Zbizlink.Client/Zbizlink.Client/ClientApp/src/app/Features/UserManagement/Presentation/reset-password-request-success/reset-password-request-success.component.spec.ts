import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordRequestSuccessComponent } from './reset-password-request-success.component';

describe('ResetPasswordRequestSuccessComponent', () => {
  let component: ResetPasswordRequestSuccessComponent;
  let fixture: ComponentFixture<ResetPasswordRequestSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordRequestSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordRequestSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
