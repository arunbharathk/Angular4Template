import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FavPagesFeedComponent } from './fav-pages-feed/fav-pages-feed.component';
import { FriendGroupsComponent } from './friend-groups/friend-groups.component';
import { MusicPlaylistsComponent } from './music-playlists/music-playlists.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { CalendarEventsComponent } from './calendar-events/calendar-events.component';

var routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'newsfeed',
    component: NewsFeedComponent
  },
  {
    path: 'favpagesfeed',
    component: FavPagesFeedComponent
  },
  {
    path: 'friendgroups',
    component: FriendGroupsComponent
  },
  {
    path: 'musicplaylists',
    component: MusicPlaylistsComponent
  },
  {
    path: 'weatherapp',
    component: WeatherAppComponent
  },
  {
    path: 'calendarevents',
    component: CalendarEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
