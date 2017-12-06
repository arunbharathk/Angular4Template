import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'
  }
];