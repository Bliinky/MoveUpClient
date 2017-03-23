var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FacebookService } from 'ng2-facebook-sdk';
var FacebookComponent = (function () {
    function FacebookComponent(facebookService) {
        this.facebookService = facebookService;
    }
    FacebookComponent.prototype.ngOnInit = function () {
        this.facebookService.init({
            appId: '1927971220769787',
            version: 'v2.8'
        });
        this.connected = false;
        this.loginStatus();
    };
    FacebookComponent.prototype.loginStatus = function () {
        var _this = this;
        this.facebookService.getLoginStatus()
            .then(function (result) {
            _this.logged = result;
            if (_this.logged.authResponse) {
                _this.connected = true;
            }
        })
            .catch(this.handleError);
    };
    FacebookComponent.prototype.login = function () {
        var _this = this;
        this.facebookService.login()
            .then(function () { return _this.loginStatus(); }, function () { return _this.connected = false; })
            .catch(this.handleError);
    };
    FacebookComponent.prototype.getProfile = function () {
        this.facebookService.api('/me')
            .then(function (res) {
            console.log('Got the users profile', res);
        })
            .catch(this.handleError);
    };
    FacebookComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    return FacebookComponent;
}());
FacebookComponent = __decorate([
    Component({
        selector: 'app-facebook',
        templateUrl: './facebook.component.html',
        styleUrls: ['./facebook.component.css']
    }),
    __metadata("design:paramtypes", [FacebookService])
], FacebookComponent);
export { FacebookComponent };
//# sourceMappingURL=../../../../../src/app/component/facebook/facebook.component.js.map