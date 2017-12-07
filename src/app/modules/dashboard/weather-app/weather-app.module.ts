import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { WeatherAppComponent } from './weather-app.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    WeatherAppRoutingModule
  ],
  declarations: [
    WeatherAppComponent
  ]
})
export class WeatherAppModule { }
