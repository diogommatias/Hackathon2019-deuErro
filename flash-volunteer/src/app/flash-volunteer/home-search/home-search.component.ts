import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable,  } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Cities from '../../data/cities.json';
import Phrases from '../../data/promptPhrases.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  @Output() out = new EventEmitter();

  prompt_phrase = Phrases.Phrases[Math.floor(Math.random() * (Phrases.Phrases.length))];

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
    this.cityName.valueChanges.subscribe((value)=>{
      this.out.emit(value)
    })
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

  near(s){
    this.router.navigate(['/cities/', s]);
  }

  go(){
    this.router.navigate(['/cities/', this.cityName.value]);
  }

}
