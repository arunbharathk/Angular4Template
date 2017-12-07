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
import { CommunityBadgesModule } from './community-badges/community-badges.module';
import { FriendsBirthdaysModule } from './friends-birthdays/friends-birthdays.module';
import { AccountStatsModule } from './account-stats/account-stats.module';
import { ManageWidgetsModule } from './manage-widgets/manage-widgets.module';
import { ProfileModule } from './profile/profile.module';

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
    CalendarEventsModule,
    CommunityBadgesModule,
    FriendsBirthdaysModule,
    AccountStatsModule,
    ManageWidgetsModule,
    ProfileModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent
  ],
  exports: [
    
  ]
})
export class DashboardModule { }
