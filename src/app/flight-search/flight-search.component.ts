import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  trip_Type = [
    'One Way',
    'Two Way'
];


}
