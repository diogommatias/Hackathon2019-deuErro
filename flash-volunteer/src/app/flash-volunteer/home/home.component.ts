import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  init: string = "olaasdfasdf";

  constructor() { }

  flash_volunteer_logo = "../../../assets/img/lgo.svg"

  ngOnInit() {
  }

}
