import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  form: FormGroup;

  constructor(private f: FormBuilder) { }

  ngOnInit() {
    this.form = this.f.group({
      name: "",
      category: "",
      description: "",
      institution: "",
      place: "",
      startDate: "",
      endDate: "",
      startTime: ""
    })
  }

}
