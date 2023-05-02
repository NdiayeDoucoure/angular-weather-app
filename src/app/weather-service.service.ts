import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}

  getWeatherApi(ville: string) {
    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=332d8cfee3c340799cc150700230205&q=' +
        ville +
        '&lang=fr'
    );
  }
}
