import { Component, OnInit } from '@angular/core';
import Events from '../../data/events.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  events = Events.Events;
  cityEvents = new Array();

  cityName: string;
  currentCategory: string;

  categories = ["Humanitary", "Emergency", "Conservation", "Cultural"];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get("city");
    if(this.cityName === "all"){
      this.cityEvents = this.events;
    } else {
      this.sortByCity();
    }
    
  }

  sortByCity(){
    this.events.forEach((event)=>{
      if(event.place === this.cityName){
        this.cityEvents.push(event);
      }
    })
  }

}
