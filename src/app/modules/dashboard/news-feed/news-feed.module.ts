import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NewsFeedRoutingModule
  ],
  declarations: [
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }
