import { TestBed, inject } from '@angular/core/testing';

import { ProductResolverService } from './product-resolver.service';

describe('ProductResoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolverService]
    });
  });

  it('should ...', inject([ProductResolverService], (service: ProductResolverService) => {
    expect(service).toBeTruthy();
  }));
});
