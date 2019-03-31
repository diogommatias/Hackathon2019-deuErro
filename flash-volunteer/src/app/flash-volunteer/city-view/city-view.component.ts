import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {

  private _events = new Array();

  city: string;

  @Input() set events(value: Array<any>) {
    this._events = value;
    this.loadMarkers();
  }

  get events() {
    return this._events;
  }

  private mapToken = 'AIzaSyBfUYkYpDFuQyYYguhGB39Za726DuCcGT8';

  latitude: number;
  longitude: number;

  markers: marker[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get("city");

    if (this.city === "all") {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        }
      })
    } else {
      this.setCityCenter();
    }

  }

  loadMarkers() {
    this.events.forEach(event => {
      this.getGeoLocation(event.location).subscribe(
        (res) => {
          if (res["status"] === "OK") {
            let location = res["results"][0].geometry.location;
            this.addMarker(location.lat, location.lng, false, event.name);
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

  setCityCenter() {
    
    this.getGeoLocation(this.city).subscribe(res => {

      if (res["status"] === "OK") {
        let location = res["results"][0].geometry.location;
        this.latitude = location.lat;
        this.longitude = location.lng;
      }
    })
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
