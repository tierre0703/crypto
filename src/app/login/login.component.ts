import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';
import { user } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    console.log('login built');
  }

  onClickSubmit(data: user) {
    this.sub = this.http.get<any[]>('http://localhost:3000/posts').subscribe(
      (res) => {
        const userData = res.flat();
        const valid = userData.find((a:user) => {
          console.log(a);
          return (a.first_name == data.username && a.password == data.password);
        });
        if (valid) {
          alert('login Success');
          this.auth.setState(true);
          this.auth.setWatchListState([]);
          localStorage.setItem('isLogged', 'true');
          this.router.navigate(['crypto']);
        } else {
          localStorage.setItem('isLogged', 'false');
          this.auth.setState(false);
          alert('user not found');
        }
      },
      (err) => {
        alert('Error has occurred');
      }
    );
    //implement validation and server side validation later.
    //routs homepage for now
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
