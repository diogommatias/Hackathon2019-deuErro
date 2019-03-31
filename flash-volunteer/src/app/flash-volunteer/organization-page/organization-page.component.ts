import { Component, OnInit } from '@angular/core';
import Organization from '../../data/organizations.json';
import Events from '../../data/events.json';
import { forEach } from '@angular/router/src/utils/collection';
import { of } from 'rxjs';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  currentOrg: any;

  orgs = Organization.Organizations;
  events = Events.Events;
  
  sortedEvents = new Array();

  constructor() { }

  ngOnInit() {
    this.currentOrg = this.orgs[5];
    
    this.sortEvents();
  }

  sortEvents(){
    this.events.forEach((event) =>{
      
      if(event.organization === this.currentOrg.name){
        this.sortedEvents.push(event);
        console.log(this.sortedEvents)
      }
    });
  }

  s


}
