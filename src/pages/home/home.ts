import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private TheUsersPage: any;

	constructor(
		private navCtrl: NavController
	) {
		this.TheUsersPage = UsersPage;
	}

	/* GoToUsersPage() {
		this.navCtrl.push(UsersPage);
	} */

	GoToShop() {
		this.navCtrl.push(ShopPage, {}, {
			direction: 'forward',
			duration: 2000,
			easing: 'ease-in-out'
		})
		.catch((err) => {
			console.log('31 -- ', err);
		});
	}
}
