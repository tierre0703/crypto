import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, take } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';
import { LoginRequest } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  subisLogged!: Subscription;
  errorMessage ='';

  constructor(private router: Router, private auth: AuthService) {
    this.subisLogged = this.auth.isLoggedIn$.subscribe(
    )
  }

  ngOnInit(): void {
    console.log('login built');
  }

  onClickSubmit(data: LoginRequest) {
    this.auth.login(data).pipe(take(1)).subscribe((user)=>{
      // if no error then navigate to crypto
      if (!user.error) {
        this.router.navigate(['crypto']);
      } else {
        // error handling here
      }

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
