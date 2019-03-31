import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {

  private _events = new Array();

  @Input() set events(value: Array<any>) {
    this._events = value;
    this.loadMarkers();
  } 

  get events(){
    return this._events;
  }

  private mapToken = 'AIzaSyBfUYkYpDFuQyYYguhGB39Za726DuCcGT8';

  latitude: number;
  longitude: number;


  markers: marker[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }
    })

  }

  loadMarkers() {
    this.events.forEach(event => {
      this.getGeoLocation(event.location).subscribe(
        (res) => {
          if(res["status"]==="OK"){
            let location = res["results"][0].geometry.location;
            this.addMarker(location.lat, location.lng, false);
          }
        }
      )
    });
  }


  addMarker(lat, lng, draggable, label?) {
    this.markers.push({
      lat: lat,
      lng: lng,
      draggable: draggable,
      label: label
    })
  }

  pickLocation($event) {
    console.log($event)
  }

  getGeoLocation(address): Observable<any> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.mapToken);
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
