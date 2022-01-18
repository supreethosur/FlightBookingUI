import { Component, OnInit } from '@angular/core';
import { FlightModel } from './FlightModel';
// import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  // userId:number=0;

  searchForm: FormGroup;
  tripType: String = "";
  fromLocation: String = "";
  toLocation: String = "";
  startDate: String = "";
  returnDate: String = "";

  constructor() {
    console.log("Hello");
    this.searchForm = new FormGroup({
      // tripType: new FormControl("", [
      //   Validators.required
      // ]),
      fromLocation: new FormControl("", [
        Validators.required
      ]),
      toLocation: new FormControl("", [
        Validators.required
      ]),
      startDate: new FormControl("", [
        Validators.required
      ]),
      returnDate: new FormControl("", [
        Validators.required
      ])
    });

    
  }

  ngOnInit(): void {
  }

  trip_Type = [
    'One Way',
    'Two Way'
];

getFlights(trip_Type:String ,fromLocation:String,toLocation:String,startDate:String,returnDate:String){

  console.log(trip_Type+ " "+ fromLocation+" "+toLocation+ " "+startDate+ " "+returnDate);
}


flightList: FlightModel[] = [  
  new FlightModel('abc','abc','abc','abc'),  
  new FlightModel('def','def','def','def'),  
  new FlightModel('ghi','ghi','ghi','ghi')  
]; 


}
