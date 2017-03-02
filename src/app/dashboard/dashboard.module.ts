import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    NotificationsComponent,
    NotificationComponent
  ],
  providers: [NotificationService]
})
export class DashboardModule { }
