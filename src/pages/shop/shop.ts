import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyoutPage } from '../buyOut/buyout';

// @Injectable()
@Component({
	selector: 'page-shop',
	templateUrl: 'shop.html',
})
export class ShopPage {
	private pdList: {
		name: string,
		price: number,
		qty: number
	}[] = [];
	constructor(
		private navCtrl: NavController,
		private http: Http
	) {
		const pdUrl = './localData/pds.json';
		this.http.get(pdUrl).toPromise()
			.then((res) => {
				const resjson = res.json();
				if (resjson) {
					this.pdList = resjson;
				} else {
					this.pdList = [];
				}
			})
			.catch((err) => {
				throw err;
			});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ShopPage');
	}

	// GoBuyout() {
	// 	this.navCtrl.push(BuyoutPage);
	// }

	onGoToBuyout(product: { name: string, price: number, qty: number }) {
		this.navCtrl.push(BuyoutPage, product);
	}

}
