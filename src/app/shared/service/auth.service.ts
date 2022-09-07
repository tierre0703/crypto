import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { user } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean>;
  public watchList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(public http:HttpClient) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'false';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  getState() {
    return localStorage.getItem('loggedIn');
  }

  setState(d: boolean) {
    this.isLoggedIn$.next(d);
  }


  setWatchListState(d:string[])
  {
    this.watchList$.next(d);
  }


  logout() {
    this.isLoggedIn$.next(false);
    this.watchList$.next([]);
    localStorage.clear();
  }
}
