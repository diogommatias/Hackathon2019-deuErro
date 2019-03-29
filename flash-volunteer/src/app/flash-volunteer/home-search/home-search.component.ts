import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  homeSearchForm: FormGroup;

  options = [
    'Lisboa',
    'Porto',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.homeSearchForm = this.fb.group({
      cityName: ""
    });
  }

}
