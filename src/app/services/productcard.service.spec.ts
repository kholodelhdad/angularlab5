import { TestBed } from '@angular/core/testing';

import { ProductcardService } from './productcard.service';

describe('ProductcardService', () => {
  let service: ProductcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
