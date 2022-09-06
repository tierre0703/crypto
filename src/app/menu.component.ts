import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [LoginComponent],
})
export class MenuComponent implements OnInit {
  isLogged!: boolean;

  constructor(public auth: AuthService) {
    this.isLogged = Boolean(this.auth.getState());
  }

  ngOnInit(): void {
    this.isLogged = Boolean(this.auth.getState());
  }
}
