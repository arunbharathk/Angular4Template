import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { SidebarLeftComponent } from './layout/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './layout/sidebar-right/sidebar-right.component';
import { WeatherHeaderComponent } from './components/weather/weather-header/weather-header.component';
import { FriendgroupsHeaderComponent } from './components/friend/friendgroups-header/friendgroups-header.component';
import { MusicplaylistsHeaderComponent } from './components/music/musicplaylists-header/musicplaylists-header.component';
import { CalendareventsHeaderComponent } from './components/calendar/calendarevents-header/calendarevents-header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    WeatherHeaderComponent,
    FriendgroupsHeaderComponent,
    MusicplaylistsHeaderComponent,
    CalendareventsHeaderComponent
  ],
  exports: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    WeatherHeaderComponent,
    FriendgroupsHeaderComponent,
    MusicplaylistsHeaderComponent,
    CalendareventsHeaderComponent
  ]
})
export class CoreModule { }
