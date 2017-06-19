import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService:HttpService){}

  cityname = "";
  citydata = [];
  humidity = "";
  average = 0;
  high = 0;
  low = 0;
  status = "";



  ngOnInit(){

  this.cityname = "burbank";
  this._httpService.retrieveCityData(this.cityname)
  .then( citydata => { this.citydata = citydata;
    this.humidity = citydata.main.humidity;
    this.average = (citydata.main.temp_max + citydata.main.temp_min) / 2;
    this.high = citydata.main.temp_max;
    this.low = citydata.main.temp_min;
    this.status = citydata.weather[0].description;

  console.log(this.humidity);})
  .catch( err => {console.log(err);})
}



}
