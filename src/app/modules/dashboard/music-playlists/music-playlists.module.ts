import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { MusicPlaylistsRoutingModule } from './music-playlists-routing.module';
import { MusicPlaylistsComponent } from './music-playlists.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MusicPlaylistsRoutingModule
  ],
  declarations: [MusicPlaylistsComponent]
})
export class MusicPlaylistsModule { }
