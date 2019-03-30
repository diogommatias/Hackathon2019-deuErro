import { Component, OnInit, Input, Output } from '@angular/core';
import { EventRegistDialogComponent } from '../event-regist-dialog/event-regist-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

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

  get eventDate() {
    let start: Date = this.eventStartDate;
    let finish: Date = this.eventEndDate;
    let date: String = start.getDay + "/" + start.getMonth + " a " + finish.getDay + "/" + finish.getMonth;
    return date;
  }

  get eventStartTime() {
    return this.event["startTime"];
  }

}
