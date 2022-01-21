import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { userModel } from "../Models/userModel";
import { Observable } from "rxjs";


@Injectable({"providedIn": "root"})
export class UserService{


    constructor(private http:HttpClient){}

    addUser(user:userModel) :Observable<userModel>{
        return this.http.post<userModel>("http://localhost:8081/addUser", user);

        // let token = localStorage.getItem("token")
        // return this.http.post("http://localhost:8080/api/v1/movies", movie, {headers: {"Authorization": "bearer "+token}});
    }

}