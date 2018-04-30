import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Api } from '../../providers/api/api';


/**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-upload',
  templateUrl: 'image-upload.html',
})
export class ImageUploadPage {

  constructor(public api: Api, public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController  ) {
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
    }

    this.camera.getPicture(options).then((imageData) => {
      let seq = this.api.post('upload', imageData).share();

      seq.subscribe((res: any) => {
        this.navCtrl.push('ContentPage', {
          imageData: {
            hospitalName: res.hospitalName,
            balance: res.balance,
            treatmentCode: res.medicalCode,
            treatmentDate: res.treatmentDate,
            treatmentDesc: res.serviceDescription,
          }
        });
     }, err => {
        this.displayErrorAlert(err);
      });
    });
  }

  
  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
  }
}
