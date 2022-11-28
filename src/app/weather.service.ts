import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { weatherdata } from './Models/weatherdata';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  rooturl=`http://api.weatherstack.com/current?access_key=ad47cdce171a9c1b9ec45ee022d33b44&query=`


 getWeatherdata(city: string):Observable<weatherdata> {
    return this.http.get<weatherdata>(this.rooturl+city)
  }

   
   
}
