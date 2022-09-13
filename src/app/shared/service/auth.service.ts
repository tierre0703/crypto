import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  map,
  tap,
  Observable,
  throwError,
} from 'rxjs';
import { LoginRequest, SignupRequest, User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this._isLoggedIn.asObservable();

  private _userInfo: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  readonly userInfo$ = this._userInfo.asObservable();

  constructor(public http: HttpClient, private router: Router) {}

  setState(d: boolean): void {
    this._isLoggedIn.next(d);
  }

  setUserState(d: User): void {
    this._userInfo.next(d);
  }

  /**
   * login function
   * @param data - LoginRequest param for login
   * @returns Observable<User>
   */
  login(data: LoginRequest): Observable<User> {
    return this.http.post<User>('http://localhost:3000/login', data).pipe(
      map((user)=>{
        this.setUserState(user);
        return user;
      },
      catchError(err=>{
        // catch error handling
        throw err;
      })
      )
    );
  }

  logout(): void {
    this.setState(false);
    this._userInfo.next(null);
    localStorage.clear();
  }

  signup(formData: SignupRequest): Observable<User> {
    return this.http.post<User>('http://localhost:3000/signup', formData).pipe(
      map(
        (user) => {
          return user;
        }
      ),
      catchError(err=>{
        // catch error handling
        throw err;
      })
    );
  }
}
