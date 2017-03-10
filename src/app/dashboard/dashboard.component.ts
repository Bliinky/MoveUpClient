import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Notification } from '../model/notification';
import { NotificationService } from '../service/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notifications: Observable<Array<Notification>>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }
}
