import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  
  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

  get eventName(){
    return this.event["name"];
  }

  get eventDescription(){
    return this.event["description"];
  }

  get eventOrganization(){
    return this.event["organization"];
  }
  get eventLocation(){
    return this.event["place"];
  }

  get eventCategory(){
    return this.event["category"];
  }
 
  get eventStartDate(){
    return this.event["startDate"];
  }

  get eventEndDate(){
    return this.event["endDate"];
  }

  get eventStartTime(){
    return this.event["startTime"];
  }

  

}
