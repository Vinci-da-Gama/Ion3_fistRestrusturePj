import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UserPage } from './user/user';

@Component({
	selector: 'page-users',
	templateUrl: 'users.html',
})
export class UsersPage {

	constructor(
		private navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad UsersPage');
	}

	GoBackHome() {
		this.navCtrl.push(HomePage);
	}

	checkUser(name: string) {
		console.log('27 -- ', name);
		this.navCtrl.push(UserPage, {
			userName: name
		});
	}

}
