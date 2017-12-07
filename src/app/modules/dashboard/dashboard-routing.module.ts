import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TypographyComponent } from '../../core/components/typography/typography.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FavPagesFeedComponent } from './fav-pages-feed/fav-pages-feed.component';
import { FriendGroupsComponent } from './friend-groups/friend-groups.component';
import { MusicPlaylistsComponent } from './music-playlists/music-playlists.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { CalendarEventsComponent } from './calendar-events/calendar-events.component';
import { CommunityBadgesComponent } from './community-badges/community-badges.component';
import { FriendsBirthdaysComponent } from './friends-birthdays/friends-birthdays.component';
import { AccountStatsComponent } from './account-stats/account-stats.component';
import { ManageWidgetsComponent } from './manage-widgets/manage-widgets.component';

var routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      component: TypographyComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'newsfeed',
      component: NewsFeedComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'favpagesfeed',
      component: FavPagesFeedComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'friendgroups',
      component: FriendGroupsComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'musicplaylists',
      component: MusicPlaylistsComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'weatherapp',
      component: WeatherAppComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'calendarevents',
      component: CalendarEventsComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'communitybages',
      component: CommunityBadgesComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'friendsbirthdays',
      component: FriendsBirthdaysComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'accountstats',
      component: AccountStatsComponent
    }]    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'managewidgets',
      component: ManageWidgetsComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'profilepage',
      loadChildren: './profile/profile.module#ProfileModule'  
    }]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
