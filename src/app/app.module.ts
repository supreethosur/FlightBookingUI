import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { LoginComponent } from './login/login.component';
import { UserFlightDisplayComponent } from './user-flight-display/user-flight-display.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes = [
  { path: "Login", component: LoginComponent },
  { path: "FlightSearch/:userId", component: FlightSearchComponent },
  { path: "UserFlightDisplay/:userId", component: UserFlightDisplayComponent },
  { path: "**", redirectTo: "Login" }
]

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    LoginComponent,
    UserFlightDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
