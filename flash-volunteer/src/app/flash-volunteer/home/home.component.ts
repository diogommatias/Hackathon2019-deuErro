import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Cities from '../../data/cities.json';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgUrl = '../../../assets/img/default.jpg';

  flash_volunteer_logo = "../../../assets/img/logo.svg"

  constructor(private router: Router, private es: EventService) { }

  ngOnInit() {
    this.es.setEvents();
  }

  go(s){
    this.router.navigate([s]);
  }

  tets(s: string) {
    function FindImgByName(task) {

      if (task.name === this[0]) {
        return task;
      }
    }
    try {
      var img = Cities.Cities.find(FindImgByName, [s]).img;
      this.imgUrl = '../../../assets/img/' + img;
    } catch (e) {
      console.log("lolada");
    }
  }
}
