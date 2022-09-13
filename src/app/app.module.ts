import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CryptoDataComponentComponent } from './crypto-data-component/crypto-data-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CryptoInfoComponent } from './crypto-info/crypto-info.component';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    CryptoDataComponentComponent,
    DetailComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CryptoInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatCardModule,
    MatSortModule,
    MatIconModule,
    NgChartsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    RouterModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
