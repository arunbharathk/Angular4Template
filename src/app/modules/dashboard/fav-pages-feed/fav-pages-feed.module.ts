import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'
import { FavPagesFeedRoutingModule } from './fav-pages-feed-routing.module';

import { FavPagesFeedComponent } from './fav-pages-feed.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FavPagesFeedRoutingModule
  ],
  declarations: [
    FavPagesFeedComponent
  ]
})
export class FavPagesFeedModule { }
