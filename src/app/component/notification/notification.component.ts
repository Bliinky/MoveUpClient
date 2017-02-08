import { Component, OnInit, Input} from '@angular/core';
import { Notification } from '../../model/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

	@Input()
  notification: Notification = new Notification();

  constructor() { }

  ngOnInit() { 
     
  }

}
