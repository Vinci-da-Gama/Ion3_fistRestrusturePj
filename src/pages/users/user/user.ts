import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-user',
	templateUrl: 'user.html',
})
export class UserPage implements OnInit {
	private name: String = '';

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ngOnInit() {
		this.name = this.navParams.get('userName');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserPage');
	}

	onGoBack() {
		this.navCtrl.pop();
		// this.navCtrl.popToRoot();
	}

}
