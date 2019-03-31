import { Component, OnInit } from '@angular/core';
import Organization from '../../data/organizations.json';
import Events from '../../data/events.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  currentOrg: any;

  orgs = Organization.Organizations;
  events = Events.Events;
  
  sortedEventsInProgress = new Array();
  sortedEventsNew = new Array();
  sortedEventsDone = new Array();

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentOrg = this.orgs[5];
    
    this.sortEvents();
  }

  organizationName() {
    return this.currentOrg.name;
  }

  sortEvents(){
    this.events.forEach((event) =>{
      if(event.organization === this.currentOrg.name){
        if(event.status === "in progress") {
          this.sortedEventsInProgress.push(event);
        }else 
        if(event.status === "next") {
          this.sortedEventsNew.push(event);
        }else
        if(event.status === "done") {
          this.sortedEventsDone.push(event);
        }
      }
    });
  }

  createEvent() {
    this.router.navigate(['/add/']);
  }


}
