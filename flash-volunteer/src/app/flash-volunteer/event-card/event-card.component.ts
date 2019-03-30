import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  
  @Input() event;

  constructor() { }

  ngOnInit() {
  }

  get Name(){
    console.log(event);
    return event["name"];
  }




}
