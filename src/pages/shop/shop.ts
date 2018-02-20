import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyOut/buyout';

@Component({
	selector: 'page-shop',
	templateUrl: 'shop.html',
})
export class ShopPage {

	constructor(
		private navCtrl: NavController
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ShopPage');
	}

	GoBuyout() {
		this.navCtrl.push(BuyoutPage);
	}

}
