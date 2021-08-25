import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContractVehicleComponent } from './add-edit-contract-vehicle.component';

describe('AddEditContractVehicleComponent', () => {
  let component: AddEditContractVehicleComponent;
  let fixture: ComponentFixture<AddEditContractVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditContractVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContractVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
