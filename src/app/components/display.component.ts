import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weatherservice';

import { WeatherData, Model } from '../objects/model'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private serviceSub: Subscription;

  model: Model;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.serviceSub = this.weatherService.queryEvent.subscribe((data) => {
      this.model = this.weatherService.search(data);
      // console.log(this.model);
    });
  }

  ngOnDestroy() {
    this.serviceSub.unsubscribe();
  }

}
