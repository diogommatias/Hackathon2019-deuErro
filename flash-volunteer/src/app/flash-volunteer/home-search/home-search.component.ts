import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Cities from '../../data/cities.json'

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  homeSearchForm: FormGroup;
  filteredOptions: Observable<any[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.homeSearchForm = this.fb.group({
      cityName: ""
    });

    this.filteredOptions = this.cityName.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return Cities.Cities.filter(city => city["name"].toLowerCase().includes(filterValue))
  }

  get cityName(): FormControl{
    return this.homeSearchForm.get("cityName") as FormControl;
  }

  getCityNameFromJson(city: any){
    return city["name"];
  }



}
