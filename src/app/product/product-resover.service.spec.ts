import { TestBed, inject } from '@angular/core/testing';

import { ProductResoverService } from './product-resover.service';

describe('ProductResoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResoverService]
    });
  });

  it('should ...', inject([ProductResoverService], (service: ProductResoverService) => {
    expect(service).toBeTruthy();
  }));
});
