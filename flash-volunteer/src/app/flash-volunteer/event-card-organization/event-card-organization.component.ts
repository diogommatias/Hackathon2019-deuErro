import { Component, OnInit, Input } from '@angular/core';
import { EventRegistDialogComponent } from '../event-regist-dialog/event-regist-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-event-card-organization',
  templateUrl: './event-card-organization.component.html',
  styleUrls: ['./event-card-organization.component.css']
})
export class EventCardOrganizationComponent implements OnInit {

  @Input() event: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  register() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = this.event;
    dialogConfig.restoreFocus = false;
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(EventRegistDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  get eventName() {
    return this.event["name"];
  }

  get eventDescription() {
    return this.event["description"];
  }

  get eventOrganization() {
    return this.event["organization"];
  }
  get eventLocation() {
    return this.event["place"];
  }

  get eventCategory() {
    return this.event["category"];
  }

  get eventStartDate() {
    return this.event["startDate"];
  }

  get eventEndDate() {
    return this.event["endDate"];
  }
  
  get eventStartTime() {
    return this.event["startTime"];
  }

}
