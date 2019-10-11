import { TestBed } from '@angular/core/testing';

import { ServicioTesteableService } from './servicio-testeable.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServicioTesteableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: ServicioTesteableService = TestBed.get(ServicioTesteableService);
    expect(service).toBeTruthy();
  });

  it('should connect to an API', () => {
    const service: ServicioTesteableService = TestBed.get(ServicioTesteableService);
    expect(service.doAPICall('https://dog.ceo/api/breeds/image/random')).toBeDefined();
  });
});
