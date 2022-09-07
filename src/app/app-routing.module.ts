import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDataComponentComponent } from './crypto-data-component/crypto-data-component.component';
import { DetailComponent } from './detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'crypto', component: CryptoDataComponentComponent },
  { path: 'crypto/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '', redirectTo: 'crypto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
