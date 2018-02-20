import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		private navCtrl: NavController
	) { }

	GoToUsersPage() {
		this.navCtrl.push(UsersPage);
	}
}
