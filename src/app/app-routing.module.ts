import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceComponent } from './price/price.component';
import { ResourcesComponent } from './resources/resources.component';
import { TimetableComponent } from './timetable/timetable.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'price', component: PriceComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
