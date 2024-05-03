import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DbManagerService } from './db-manager.service';
import {USERS} from '../mock-data/users';
import { BlacklistService } from './blacklist.service';


// Mock class 
class MockBlacklistService{

  public  isBlackListed(userName: string): boolean{
    if (userName === 'kalu') {
    return true;
   } else {
    return false;
   }
  }

  public  addToBlackList(userName: string): void{
    userName;
  }
}

describe('DbManagerService', () => {
  let service: DbManagerService;
  let testingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, // mock http client
      ],
      providers: [
        {
        provide: BlacklistService, // Not injected(explicitly) as their is no direct usage.
        useClass: MockBlacklistService  // using mock instead of actual 
      }
    ]
    });
    service = TestBed.inject(DbManagerService);
    testingController = TestBed.inject(HttpTestingController); // mock http request
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it should return user list', ()=>{
    
    service.getAllUsers().subscribe(users => {
      expect(users).toEqual(['puglu','gablu', 'gublu']);
    })
    /*
     * Logic to mock http request/response 
    */
    const mockResponse = testingController.expectOne('get/users') 
    mockResponse.flush(Object.values(USERS));
    
  });
});
