import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ImageData } from '../../models/imageData';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  // @Input() imageData: ImageData;
  public imageData: ImageData;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageData = navParams.get("imageData");
    console.log(this.imageData);
  }

  public exit(){
    this.navCtrl.pop();
  }

}
