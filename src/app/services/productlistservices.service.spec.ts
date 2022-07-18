import { TestBed } from '@angular/core/testing';

import { ProductlistservicesService } from './productlistservices.service';

describe('ProductlistservicesService', () => {
  let service: ProductlistservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
