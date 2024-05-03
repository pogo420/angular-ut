import { TestBed } from '@angular/core/testing';

import { BlacklistService } from './blacklist.service';

describe('BlacklistService', () => {
  let service: BlacklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlacklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should check for blacklisting', ()=>{
    expect(service.isBlackListed('ola')).toEqual(false);
   });

   it('it should add user to blacklist', ()=>{
    expect(service.isBlackListed('ola')).toEqual(false);
    service.addToBlackList('ola');
    expect(service.isBlackListed('ola')).toEqual(true);
   });
});
