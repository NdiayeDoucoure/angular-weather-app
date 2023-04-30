import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather: any;
  temperature = 0;
  humidite = 0;
  ville = 'Dakar';
  unite = 'imperial';
  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.weatherService
      .getWeatherApi(this.ville, this.unite)
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
        this.temperature = this.weather.main.temp;
        this.humidite = this.weather.main.humidity;
      });
  }
}
