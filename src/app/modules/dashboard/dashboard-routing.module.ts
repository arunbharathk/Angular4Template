import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

var routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'newsfeed',
    component: NewsFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
