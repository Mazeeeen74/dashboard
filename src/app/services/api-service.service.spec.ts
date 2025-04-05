import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiServiceService , 
        provideHttpClient()
      ]
    });
    service = TestBed.inject(ApiServiceService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  /* Testing get all products api */
  
  it('Get all products should return array of 20', (done: DoneFn) => {
    service.getAllProducts().subscribe((value) => {
      expect(value.length).toBe(20);
      done();
    });
  });

  it('Get all products should return not null', (done: DoneFn) => {
    service.getAllProducts().subscribe((value) => {
      expect(value).not.toBe(null);
      done();
    });
  });
});
