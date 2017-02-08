import { Component, OnInit } from '@angular/core';
import { Notification } from '../../model/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
	
	notifications: Array<Notification> = [];
	
  constructor() { }

  ngOnInit() {
		this.notifications = [];
		let notif1: Notification = new Notification();
		notif1.name = "Wolf";
		notif1.message = "I watched stupidity of mankind through the scope of my rifle.";
		notif1.image = new Image().src = "http://orig10.deviantart.net/07f3/f/2015/103/e/5/commission__sniper_wolf_by_richten-d8pkz0s.jpg";
		
		let notif2: Notification = new Notification();
		notif2.name = "Minus";
		notif2.message = "Dis Cortex, tu veux faire quoi cette nuit ?";
		notif2.image = new Image().src = "http://media.topito.com/wp-content/uploads/2014/12/minus-250x250.jpg";
		
		let notif3: Notification = new Notification();
		notif3.name = "Cortex";
		notif3.message = "La même chose que chaque nuit, Minus, tenter de conquérir le MONDE !";
		notif3.image = new Image().src = "http://media.topito.com/wp-content/uploads/2014/12/cortex-250x250.jpg";
		
		this.notifications.push(notif1);
		this.notifications.push(notif2);
		this.notifications.push(notif3);
  }

}
