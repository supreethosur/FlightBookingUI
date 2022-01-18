import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
// import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  adminloginForm: FormGroup;
  userName: String = "";
  emailId: String = "";
  adminId: String = "";
  password: String = "";

  // private router: Router=new Router();
  // constructor (private router: Router){
  // }
  // userId :number=1;

  ngOnInit(): void {
  }

  constructor() {
    console.log("Hello");
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        // Validators.pattern(""),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]),
      emailId: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])
    });

    this.adminloginForm = new FormGroup({
      adminId: new FormControl("", [
        // Validators.pattern(""),
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
      ])
    });
  }

  getLogin(username: String, emailId: String) {
    this.userName = username
    this.emailId = emailId
    console.log(emailId);
    

    // this.router.navigate(["UserFlightDisplay", this.userId]);

  }


  getAdminLogin(adminId: String, password: String) {
    this.adminId = adminId;
    this.password = password;
    console.log(adminId);
    console.log(password);
  }

}
