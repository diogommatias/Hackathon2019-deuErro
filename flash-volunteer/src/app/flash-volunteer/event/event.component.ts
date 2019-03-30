import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventName = this.route.snapshot.paramMap.get("event");
  }

}
