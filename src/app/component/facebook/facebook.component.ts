import { Component, OnInit } from '@angular/core';

import { FacebookService, FacebookLoginResponse, FacebookLoginOptions, FacebookUiParams, FacebookLoginStatus } from 'ng2-facebook-sdk';
import { FacebookUiResponse } from "ng2-facebook-sdk/dist/ng2-facebook-sdk";

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  private logged: FacebookLoginStatus;
  private connected: boolean;

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    this.facebookService.init({
      appId: '1927971220769787',
      version: 'v2.8'
    });
    this.connected = false;
    this.loginStatus();

  }

  loginStatus() {
    this.facebookService.getLoginStatus()
      .then((result: FacebookLoginStatus) => {
        this.logged = result
        if(this.logged.authResponse) {
          this.connected = true;
        }
      })
      .catch(this.handleError);
  }

  login() {
    this.facebookService.login()
      .then(() => this.loginStatus(), () => this.connected = false)
      .catch(this.handleError);
  }

  getProfile() {
    this.facebookService.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

}
