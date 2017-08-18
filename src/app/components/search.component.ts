import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../services/weatherservice';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('queryForm') queryForm: NgForm;  

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  processForm() {
    
    const query = this.queryForm.value.query;
    
    // console.log('processing form: ', query);

    this.weatherService.queryEvent.emit(query);
  }

}
