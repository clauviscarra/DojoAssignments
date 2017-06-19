import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService{

  constructor(private _http: Http) { }
  retrieveCityData(cityname) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' +cityname + '&units=imperial&appid=7c0089a51d3a0058b9370a6f54a82ce1').map(data=>data.json()).toPromise()
  }
}
