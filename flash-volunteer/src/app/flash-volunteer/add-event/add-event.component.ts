import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private es: EventService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      organization: ["", Validators.required],
      place: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      startTime: ["", Validators.required]
    })
  }

  get category():FormControl{
    return this.form.get("category") as FormControl;
  }

  submit() {
    this.es.addEvents(this.form.value);
    this.router.navigate(['/cities/', this.form.value.place]);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
