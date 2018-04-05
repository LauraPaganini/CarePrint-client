import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageUploadPage');
  }

  // doCam() {

  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  // this.camera.getPicture(options).then((imageData) => {
  //   // imageData is either a base64 encoded string or a file URI
  //   // If it's base64:
  //   let base64Image = 'data:image/jpeg;base64,' + imageData;
  //  }, (err) => {
  //   // Handle error
  //  });
  // }
  private image: string;

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.displayErrorAlert(err);
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
