import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weather: any;
  temperature = 0;
  humidite = 0;
  ville = 'Dakar';
  pays = '';
  unite = 'imperial';
  temps = '';
  vent = 0;
  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherApi(this.ville).subscribe((response) => {
      console.log(response);
      this.weather = response;
      this.temperature = this.weather.current.temp_c;
      this.humidite = this.weather.current.humidity;
      this.temps = this.weather.current.condition.text;
      this.vent = this.weather.current.wind_mph;
      this.pays = this.weather.location.country;
    });
  }
}
