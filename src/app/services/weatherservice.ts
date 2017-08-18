import { EventEmitter } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WeatherData, Model } from '../objects/model'

@Injectable()
export class WeatherService {

  private static API_KEY: string = 'f9a4cec017646ac7ea0619a90f77dd89';

  // Get icon from weather, description from weather, and main.
  queryEvent: EventEmitter<string> = new EventEmitter<string>();
  // model: Model;

  constructor(private http: Http) {}

  public search(query: string): Model {

    let model = new Model();

    this.http.get("http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          appid: WeatherService.API_KEY,
          q: query
        }
      }
    ).subscribe(
      (result) => {
        let jsonData = result.json();
        // console.log(jsonData);
        
        model.temp = jsonData.main.temp;
        model.pressure = jsonData.main.pressure;
        model.humidity = jsonData.main.humidity;
        model.temp_min = jsonData.main.temp_min;
        model.temp_max = jsonData.main.temp_max;

        for (let entry of jsonData.weather) {
          let weatherData: WeatherData = new WeatherData();
          weatherData.description = entry.description;
          weatherData.icon = `http://openweathermap.org/img/w/${entry.icon}.png`;
          model.weatherDatas.push(<WeatherData> weatherData);
        }

        
      },
      (error) => {
        console.error("error: ", error);
        // console.log(this.model == null);
        model = null;
      }
    );

    // console.log("Before \"return this.model;\"");
    // console.log(model);
    return model;
  }
}