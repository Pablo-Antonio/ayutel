import { Component,Input, OnInit } from '@angular/core';
import { appInfo } from '../../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  version: string = appInfo.version;
  constructor(private iab: InAppBrowser,
    private navCtrl: NavController) { }

  ngOnInit() {}

  openAyutel(){
    /*const browser = this.iab.create('https://addinteli.com.mx/');
    browser.show();*/
    window.open('https://ayutel.com.mx/');
  }

}
