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
import { CommunitybadgeHeaderComponent } from './components/community/communitybadge-header/communitybadge-header.component';
import { FriendsbirthdaysHeaderComponent } from './components/friend/friendsbirthdays-header/friendsbirthdays-header.component';
import { AccountstatsHeaderComponent } from './components/account/accountstats-header/accountstats-header.component';
import { ManagewidgetsHeaderComponent } from './components/widgets/managewidgets-header/managewidgets-header.component';
import { ProfilepageHeaderComponent } from './components/profile/profilepage-header/profilepage-header.component';
import { ProfilesettingHeaderComponent } from './components/profile/profilesetting-header/profilesetting-header.component';


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
    CalendareventsHeaderComponent,
    CommunitybadgeHeaderComponent,
    FriendsbirthdaysHeaderComponent,
    AccountstatsHeaderComponent,
    ManagewidgetsHeaderComponent,
    ProfilepageHeaderComponent,
    ProfilesettingHeaderComponent
  ],
  exports: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    WeatherHeaderComponent,
    FriendgroupsHeaderComponent,
    MusicplaylistsHeaderComponent,
    CalendareventsHeaderComponent,
    CommunitybadgeHeaderComponent,
    FriendsbirthdaysHeaderComponent,
    AccountstatsHeaderComponent,
    ManagewidgetsHeaderComponent,
    ProfilepageHeaderComponent,
    ProfilesettingHeaderComponent
  ]
})
export class CoreModule { }
