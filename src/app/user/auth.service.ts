import { IUser } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor() { }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): boolean {
    if(!userName || !password) {
      return false;
    }

    if(userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
      return true;
    }

    this.currentUser = {
        id:2, userName: userName, isAdmin: false
    };

    return true;
  }

  logout(): void {
    this.currentUser = null;
  }

}
