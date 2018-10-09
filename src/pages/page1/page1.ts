import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    console.log(navParams.get('val'));  
  }
  
 

}
