import { TestBed } from '@angular/core/testing';

import { ProductosparaperroService } from './productosparaperro.service';

describe('ProductosparaperroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosparaperroService = TestBed.get(ProductosparaperroService);
    expect(service).toBeTruthy();
  });
});
