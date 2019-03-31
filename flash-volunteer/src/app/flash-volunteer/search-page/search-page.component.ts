import { Component, OnInit } from '@angular/core';
import Events from '../../data/events.json';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  events = Events.Events;
  cityEvents = new Array();
  selectedEvents = new Array();

  categoryForm: FormGroup;

  cityName: string;

  flash_volunteer_logo = "../../../assets/img/logo.svg"

  categories = ["", "Humanitary", "Emergency", "Conservation", "Cultural"];

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get("city");
    this.sortByCity();

    this.categoryForm = this.fb.group({
      category: [""]
    })
  }

  get CurrentCategory(): FormControl {
    return this.categoryForm.get("category") as FormControl;
  }

  sortByCity() {
    this.cityEvents = new Array();
    if (this.cityName === "all") {
      this.cityEvents = this.events;
    } else {
      this.events.forEach((event) => {
        if (event.place === this.cityName) {
          this.cityEvents.push(event);
        }
      })
    }

  }

  sortByCategory() {
    let currentCategory = this.CurrentCategory.value;
    console.log(currentCategory)
    this.sortByCity();

    if (currentCategory !== "") {
      let sortedEvents = new Array();
      this.cityEvents.forEach(event => {
        if (event.category === currentCategory) {
          sortedEvents.push(event);
        }
      })
      this.cityEvents = sortedEvents;
    }

    console.log(this.cityEvents);
  }

}
