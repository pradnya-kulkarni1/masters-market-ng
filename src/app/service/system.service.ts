import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  loggedInUser: Customer = new Customer();

  constructor(private router: Router) {}

  checkLogin(): void {
    // check loggedInUser, if not logged in, forward to Login page
    // only call this method when ready for primetime
    if (this.loggedInUser.id == 0) {
      console.log('User not authenticated, redirecting to login');
      this.router.navigateByUrl('/customer/login');
    }
  }
}