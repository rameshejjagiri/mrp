import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginSubject: Subject<any> = new Subject();

  constructor() { }

  public isAuthenticated(): boolean {
    const authentication = localStorage.getItem('isAuthenticated');


    return authentication == '1' ? true : false;
  }

  logout() {

    localStorage.removeItem('isAuthenticated');
    this.loginSubject.next(false);


  }

// Ramesh Ejjagiri
  
// changes by Naresh

// new code
}
