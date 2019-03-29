import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  homeSearchForm: FormGroup;
  filteredOptions: Observable<string[]>;

  options = [
    'Lisboa',
    'Porto',
  ];

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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get cityName(): FormControl{
    return this.homeSearchForm.get("cityName") as FormControl;
  }


}
