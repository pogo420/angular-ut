import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  private blackListedUsers: string[];

  constructor() {
    this.blackListedUsers = ['kalu'];
   }

  public isBlackListed(userName: string): boolean{
    return this.blackListedUsers.includes(userName);
   }

  public addToBlackList(userName: string): void{
    this.blackListedUsers.push(userName);
  }
}
