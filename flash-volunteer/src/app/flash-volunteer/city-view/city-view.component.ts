import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {

  private mapToken = 'AIzaSyBfUYkYpDFuQyYYguhGB39Za726DuCcGT8';

  a: GoogleMap

  latitude: number;
  longitude: number;
  

  markers: marker[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      if(position){
        console.log(position)
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }
    })    
  }

  addMarker(lat, lng, draggable, label?){
    this.markers.push({
      lat: lat,
      lng: lng,
      draggable: draggable,
      label: label
    })
  }

  pickLocation($event){
    console.log($event)
  }

  getGeoLocation(address){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+this.mapToken )
      .subscribe(data => console.log(data))
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
