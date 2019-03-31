import { Injectable } from '@angular/core';
import Events from '../app/data/events.json'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events;

  constructor() { }

  setEvents() {
    if (this.events == null)
      this.events = Events.Events
  }

  getEvents() {
    return this.events;
  }

  addEvents(e) {
    this.setEvents();
    this.events.push(e);
  }

}
