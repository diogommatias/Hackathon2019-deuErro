import { Component, OnInit } from '@angular/core';
import Organization from '../../data/organizations.json';
import Events from '../../data/events.json';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  events = Events.Events;
  org: any;
  eventsFiltered: any[] = [];

  constructor() { }

  ngOnInit() {/* 
    let index: number = Math.floor(Math.random() * (Organization.Organizations.length - 0 + 1)) + 0;
    this.org = Organization.Organizations[index]; */

    this._filterEventsByOrganization();
  }

  organizationName() {
    return this.org.name;
  }

  private _filterEventsByOrganization() {
    this.events.forEach(function(event) {
      console.log(event);
      //this.eventsFiltered.push(event);
    });
    

    console.log(this.eventsFiltered);
  }


}
