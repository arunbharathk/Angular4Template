import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'signup',
  //   pathMatch: 'full',
  // },
  {
    path: 'signup',
    loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  }
];