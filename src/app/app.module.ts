import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { ActivityModule } from './activity/activity.module';
import { GalleryModule } from './gallery/gallery.module';
import { PriceModule } from './price/price.module';
import { ResourcesModule } from './resources/resources.module';
import { TimetableModule } from './timetable/timetable.module';

import {NotificationService} from "./service/notification/notification.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    DashboardModule,
    ActivityModule,
    GalleryModule,
    PriceModule,
    ResourcesModule,
    TimetableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
