import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-buyout',
	templateUrl: './buyout.html'
})
export class BuyoutPage implements OnInit {
	private sigPd: { name: string, price: number, qty: number };

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ngOnInit() {
		this.sigPd = this.navParams.data;
	}

	OnConfirmPurchase() {
		this.navCtrl.popToRoot();
	}

}

