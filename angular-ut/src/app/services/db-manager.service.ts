import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BlacklistService } from './blacklist.service';

@Injectable({
  providedIn: 'root'
})
export class DbManagerService {

  constructor(private http: HttpClient, private backListService: BlacklistService) { }

  public getAllUsers(): Observable<string[]>{

    const parserUsers = (users: any)=> {
      const modifiedUser = [];
      for (const user of users ){
        if (this.backListService.isBlackListed(user.name)){
          continue;
        }
        modifiedUser.push(user.name);
      }
      return modifiedUser;
    }

    return this.http.get('get/users').pipe(
      map((usersData) => parserUsers(usersData))
    );
  }
}
