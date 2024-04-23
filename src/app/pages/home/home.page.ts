import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { routes, Page } from '../../../assets/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'Menú principal';
  pages: Page[] = routes;

  constructor(
    private iab: InAppBrowser
  ) {
  }

  ngOnInit() {
  }

  recarga(){
    /*const browser = this.iab.create('https://byplus.io/ayutel');
    browser.show();*/
    window.open('https://byplus.io/ayutel');
  }

  openFacebook(){
    /*const browser = this.iab.create('https://www.facebook.com/profile.php?id=100083329391866');
    browser.show();*/
    window.open('https://www.facebook.com/profile.php?id=100083329391866');
  }

  openAdd(){
    /*const browser = this.iab.create('https://addinteli.com.mx/');
    browser.show();*/
    window.open('https://addinteli.com.mx/');
  }
}
