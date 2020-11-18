/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {  CousesService } from './couses.service';

describe('Service: Couses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CousesService]
    });
  });

  it('should ...', inject([ CousesService], (service:  CousesService) => {
    expect(service).toBeTruthy();
  }));
});
