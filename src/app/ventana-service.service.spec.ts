import { TestBed } from '@angular/core/testing';

import { VentanaServiceService } from './ventana-service.service';

describe('VentanaServiceService', () => {
  let service: VentanaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
