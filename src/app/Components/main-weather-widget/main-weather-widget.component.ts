import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-weather-widget',
  templateUrl: './main-weather-widget.component.html',
  styleUrls: ['./main-weather-widget.component.css']
})
export class MainWeatherWidgetComponent implements OnInit {

  country: string;
  selectedCity: string = 'Tokyo'; // Default selected city
  weatherData: any;
  loading: boolean = false;
  errorMessage: string;

  cities: string[] = ['Tokyo', 'New York', 'London', 'Paris', 'Berlin'];

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData(); // Load weather for the default city on init
  }

  getWeatherData() {
    this.loading = true;
    this.errorMessage = '';
    this.weatherData = null;

    const city = this.selectedCity === 'custom' ? this.country : this.selectedCity;

    if (city && city.length > 0) {
      const apiKey = '31374a4de9427421b9eabcd9d554c7a4';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then(data => {
          this.setWeatherData(data);
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.errorMessage = error.message || 'An error occurred. Please try again.';
        });
    } else {
      this.loading = false;
      this.errorMessage = 'Please enter a city name.';
    }
  }

  setWeatherData(data: any) {
    this.weatherData = data;
    if (this.weatherData && this.weatherData.main) {
      this.weatherData.tempCelsius = (this.weatherData.main.temp - 273.15).toFixed(1);
      this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
      this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
      this.weatherData.tempFeelsLike = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    }
  }
}
