import { Component, OnInit, Input} from '@angular/core';
import { Notification } from '../../model/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input()
	notifications: Array<Notification> = [];

  constructor() { }

  ngOnInit() {

  }

}
