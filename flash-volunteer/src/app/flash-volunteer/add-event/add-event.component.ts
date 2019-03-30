import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  form: FormGroup;

  categories: String[] = [
    "Conservation",
    "Humanitary",
    "Emergency",
    "Cultural"
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      institution: ["", Validators.required],
      place: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      startTime: ["", Validators.required]
    })
  }

  get category():FormControl{
    return this.form.get("category") as FormControl;
  }
}
