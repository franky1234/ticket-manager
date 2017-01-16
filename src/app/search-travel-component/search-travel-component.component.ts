import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-travel-component',
  templateUrl: './search-travel-component.component.html',
  styleUrls: ['./search-travel-component.component.css']
})
export class SearchTravelComponentComponent implements OnInit {

  constructor() { }

  dateToTravel : string;
  from : string;
  destiny : string;

  ngOnInit() {
  }

  availableTravelsSource = [
    {
      day:"14-01-2017 10:30", from: "oruro", destiny:"santa cruz"
    }, 
    {
      day:"06-01-2017 1:30", from: "cochabamba", destiny:"oruro"
    }, 
    {
      day:"21-01-2017 5:30", from: "tarija", destiny:"cochabamba"
    }, 
    {
      day:"16-03-2017 08:45", from: "santa cruz", destiny:"sucre"
    }, 
    {
      day:"12-08-2017 05:05", from: "la paz", destiny:"sucre"
    },
    {
      day:"14-01-2017 10:30", from: "sucre", destiny:"santa cruz"
    }, 
    {
      day:"06-01-2017 1:30", from: "cochabamba", destiny:"oruro"
    }, 
    {
      day:"21-01-2017 5:30", from: "santa cruz", destiny:"cochabamba"
    }, 
    {
      day:"16-03-2017 08:45", from: "santa cruz", destiny:"sucre"
    }, 
    {
      day:"12-08-2017 05:05", from: "oruro", destiny:"sucre"
    }
  ];

  availableTravels = this.availableTravelsSource;

  clicked(event) {
      this.availableTravels = this.availableTravelsSource.filter(t => t.destiny === this.destiny || t.from === this.from || t.day ===this.dateToTravel ).sort();         
  }
}
