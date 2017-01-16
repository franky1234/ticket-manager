import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-travel-component',
  templateUrl: './search-travel-component.component.html',
  styleUrls: ['./search-travel-component.component.css']
})
export class SearchTravelComponentComponent implements OnInit {

  constructor() { }

  from : string;
  to : string;
  dateToTravel : string;

  ngOnInit() {
  }

  availableTravelsSource = [
    {
      day:"14-01-15 10:30", destiny:"sta cruz"
    }, 
    {
      day:"06-01-17 1:30", destiny:"oruro"
    }, 
    {
      day:"21-01-14 5:30", destiny:"cochabamba"
    }, 
    {
      day:"16-03-13 08:45", destiny:"sucre"
    }, 
    {
      day:"12-08-2016 05:05", destiny:"sucre"
    }
    ];
  availableTravels = [];

  clicked(event) {
    this.availableTravels = this.availableTravelsSource.filter(t => t.destiny === this.to || t.destiny === this.from);    
  }
}
