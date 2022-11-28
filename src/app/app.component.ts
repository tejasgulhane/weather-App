import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { weatherdata } from './Models/weatherdata';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  constructor( private weatherservice : WeatherService) { 

  }

  weatherinfo?: weatherdata;
  city: string = 'london ';

  ngOnInit(): void {
    this.getWeatherdata(this.city);
    this.city=""
  }

  onSubmit(){ 
    this.getWeatherdata(this.city);
    this.city=""
  }

  private getWeatherdata(city: string){
    this.weatherservice.getWeatherdata(city)
    .subscribe({
      next: (weatherdata) => {
        this.weatherinfo = weatherdata;
        console.log(weatherdata);
      } 
    })
  }
    
  
  
}
