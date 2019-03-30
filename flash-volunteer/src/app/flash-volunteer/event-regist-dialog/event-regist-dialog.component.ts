import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-regist-dialog',
  templateUrl: './event-regist-dialog.component.html',
  styleUrls: ['./event-regist-dialog.component.css']
})
export class EventRegistDialogComponent implements OnInit {

  event;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<EventRegistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data){
      this.event = data;
  }

  ngOnInit() {
    console.log(this.event);
  }

  register() {
    console.log("registado");
    this.dialogRef.close("success")
    this.router.navigate(["../../"]);
  }

  cancel() {
    this.dialogRef.close("canceled");
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
