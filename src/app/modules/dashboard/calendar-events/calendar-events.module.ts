import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { CalendarEventsRoutingModule } from './calendar-events-routing.module';
import { CalendarEventsComponent } from './calendar-events.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CalendarEventsRoutingModule
  ],
  declarations: [
    CalendarEventsComponent
  ]
})
export class CalendarEventsModule { }
