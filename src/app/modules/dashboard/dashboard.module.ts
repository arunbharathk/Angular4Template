import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { FavPagesFeedModule } from './fav-pages-feed/fav-pages-feed.module';
import { FriendGroupsModule } from './friend-groups/friend-groups.module';
import { MusicPlaylistsModule } from './music-playlists/music-playlists.module';
import { WeatherAppModule } from './weather-app/weather-app.module';
import { CalendarEventsModule } from './calendar-events/calendar-events.module';

import { DashboardComponent } from './dashboard.component';
import { TypographyComponent } from '../../core/components/typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    NewsFeedModule,
    FavPagesFeedModule,
    FriendGroupsModule,
    MusicPlaylistsModule,
    WeatherAppModule,
    CalendarEventsModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent
  ],
  exports: [
    
  ]
})
export class DashboardModule { }
