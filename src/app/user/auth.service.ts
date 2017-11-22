import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Blaine',
      lastName: 'Arnau',
      userName : userName,
      password: password
    }
     
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
   this.currentUser.firstName = firstName;
   this.currentUser.lastName = lastName;
  }

}
