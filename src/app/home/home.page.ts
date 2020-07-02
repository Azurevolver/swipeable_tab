import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NewsPage } from '../news/news.page';
import { AccountPage } from '../account/account.page';
import { AboutPage } from '../about/about.page';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;
  
  canGoBack = false;

  @ViewChild('newsNav', {static: false}) newsNav:IonNav;

  constructor() {}

  goBack() {
    this.newsNav.pop();
  }

  ngAfterViewInit() {
    this.newsNav.ionNavDidChange.subscribe(async ev => {
      console.log('[debug] home page listner - event: ', ev);
      this.canGoBack = await this.newsNav.canGoBack();
    })
  }

}
