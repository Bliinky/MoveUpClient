import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookService } from 'ng2-facebook-sdk';
import { FacebookComponent } from '../component/facebook/facebook.component';

import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from '../component/notifications/notifications.component';
import { NotificationComponent } from '../component/notification/notification.component';
import { NotificationService } from '../service/notification/notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    FacebookComponent,
    NotificationsComponent,
    NotificationComponent
  ],
  providers: [NotificationService, FacebookService]
})
export class DashboardModule { }
