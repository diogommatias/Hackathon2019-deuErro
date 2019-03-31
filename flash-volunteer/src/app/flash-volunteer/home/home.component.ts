import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cities from '../../data/cities.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgUrl;

  flash_volunteer_logo = "../../../assets/img/logo.svg"

  constructor(private router: Router) { }

  ngOnInit() {
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
      document.getElementById("home").style.backgroundImage = "url('"+this.imgUrl+"')";
    } catch (e) {
      console.log("lolada");
    }
  }
}
