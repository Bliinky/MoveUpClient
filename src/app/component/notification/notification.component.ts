import { Component, OnInit } from '@angular/core';
import {Notification} from '../../model/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: Notification = new Notification();

  constructor() { }

  ngOnInit() {
     this.notification.name = "name";
     this.notification.message = "message";
  }

}
