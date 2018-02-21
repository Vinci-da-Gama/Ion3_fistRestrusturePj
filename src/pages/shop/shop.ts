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

	ionViewCanEnter(): boolean | Promise<boolean> {
		const rnd = Math.random();
		console.log('40 -- ionViewCanEnter: ', rnd);
		return rnd > 0.6;
	}

	ionViewDidLoad() {
		console.log('45 -- ionViewDidLoad ShopPage');
	}

	ionViewWillEnter() {
		console.log('49 -- ionViewWillEnter ShopPage');
	}

	ionViewDidEnter() {
		console.log('53 -- ionViewWillEnter ShopPage');
	}

	ionViewCanLeave(): boolean | Promise<object> {
		console.log('57 -- ionViewCanLeave ShopPage');
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});
		return promise;
	}

	ionViewWillLeave() {
		console.log('67 -- ionViewWillLeave ShopPage');
	}

	ionViewDidLeave() {
		console.log('71 -- ionViewDidLeave ShopPage');
	}

	ionViewWillUnload() {
		console.log('75 -- ionViewWillUnload ShopPage');
	}

	// GoBuyout() {
	// 	this.navCtrl.push(BuyoutPage);
	// }

	onGoToBuyout(product: { name: string, price: number, qty: number }) {
		this.navCtrl.push(BuyoutPage, product);
	}

}
