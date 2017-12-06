import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

var routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];
export var LandingPageRoutingModule = RouterModule.forChild(routes);
