import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    DashboardModule
  ],
  exports: [
    AppComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
