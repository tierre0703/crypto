import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  providers: [LoginComponent],
})
export class MenuComponent implements OnInit, OnDestroy {
  isLogged: boolean = false;
  sub!: Subscription;

  constructor(public auth: AuthService) {
  }


  ngOnInit(): void {
      this.sub = this.auth.isLoggedIn$.subscribe((log) => this.isLogged);
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
