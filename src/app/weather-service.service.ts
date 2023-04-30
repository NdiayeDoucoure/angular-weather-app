import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}

  getWeatherApi(ville: string, unite: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        ville +
        '&appid=062aff386c1a8cd44f97fcf9dcc2b50a&units=' +
        unite
    );
  }
}
