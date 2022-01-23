import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { userModel } from "../Models/userModel";
import { Observable } from "rxjs";
import { adminModel } from "../Models/adminModel";


@Injectable({"providedIn": "root"})
export class UserService{
    adminLogin(admin: adminModel) {
        return this.http.post("localhost:8084/authenticate", admin);
    }


    constructor(private http:HttpClient){}

    addUser(user:userModel) :Observable<userModel>{
        return this.http.post<userModel>("http://localhost:8081/addUser", user);

        // let token = localStorage.getItem("token")
        // return this.http.post("http://localhost:8080/api/v1/movies", movie, {headers: {"Authorization": "bearer "+token}});
    }

}