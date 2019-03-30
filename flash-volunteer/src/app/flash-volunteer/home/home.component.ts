import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  flash_volunteer_logo = "../../../assets/img/logo.svg";
  banner_background_image = "";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(s){
    this.router.navigate([s]); 
  }




}
