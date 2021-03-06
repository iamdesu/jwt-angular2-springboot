import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideAuth } from 'angular2-jwt';
import { NgRedux, NgReduxModule } from 'ng2-redux';

// import { AUTH_PROVIDERS } from 'angular2-jwt';

import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AuthGuard } from './common/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard,
    provideAuth({
      noTokenScheme: true,
      tokenGetter: (() => JSON.parse( localStorage.getItem('id_token') ) ),
      globalHeaders: [{'Accept': 'application/json'}],
    })
       //, ...AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux< IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
