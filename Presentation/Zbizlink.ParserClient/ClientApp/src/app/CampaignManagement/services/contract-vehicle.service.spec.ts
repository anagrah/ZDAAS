import { TestBed } from '@angular/core/testing';

import { ContractVehicleService } from './contract-vehicle.service';

describe('ContractVehicleService', () => {
  let service: ContractVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
