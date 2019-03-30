import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Cities from '../../data/cities.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  homeSearchForm: FormGroup;
  filteredOptions: Observable<any[]>;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.homeSearchForm = this.fb.group({
      cityName: ["", Validators.required]
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

  go(){
    this.router.navigate(['/cities/', this.cityName.value]);
  }



}
