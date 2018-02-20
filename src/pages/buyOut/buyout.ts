import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-buyout',
	templateUrl: './buyout.html'
})
export class BuyoutPage implements OnInit {
	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ngOnInit() {

	}

}

