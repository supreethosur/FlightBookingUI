import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FlightModel } from "src/app/flight-search/FlightModel";
import { Observable } from "rxjs";




@Injectable({"providedIn": "root"})
export class adminService{
    
  constructor(private http:HttpClient){}


    addNewFlight(flightModel: FlightModel) :Observable<FlightModel>{
      return this.http.post<FlightModel>("http://localhost:8084/addFlights", flightModel);
    }

    getFlights(flightName:String) : Observable<FlightModel[]>{
        return this.http.get<FlightModel[]>("http://localhost:8082/GetAllFlights?FlightName="+flightName);
    }

    deleteFlight(flightId:Number){
      return this.http.delete("http://localhost:8082/deleteFlight/"+flightId);
  }
}