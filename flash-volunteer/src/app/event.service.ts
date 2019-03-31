import { Injectable } from '@angular/core';
import Events from '../app/data/events.json'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events;

  constructor() {  }

  setEvents() {
    this.events = Events.Events
    console.log(this.events);
  }

  getEvents() {
    return this.events;
  }

  addEvents(e) {
    if (this.events == null) this.setEvents();
    this.events.push(e);
  }

}
