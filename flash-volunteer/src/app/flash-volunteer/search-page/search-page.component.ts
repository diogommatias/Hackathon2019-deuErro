import { Component, OnInit } from '@angular/core';
import Events from '../../data/events.json';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  events = Events.Events;

  constructor() { }

  ngOnInit() {
    console.log(this.events)
  }
  

}
