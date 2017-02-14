import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Notification} from "../model/notification";

@Injectable()
export class NotificationService {

  constructor() { }

  public getNotifications(): Observable<Array<Notification>> {
    let notifications: Array<Notification>;
    notifications = [];
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

		notifications.push(notif1);
		notifications.push(notif2);
		notifications.push(notif3);

    return Observable.of(notifications);
  }

}
