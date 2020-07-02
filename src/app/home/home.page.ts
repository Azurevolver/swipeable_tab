import { Component } from '@angular/core';
import { NewsPage } from '../news/news.page';
import { AccountPage } from '../account/account.page';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;
  
  constructor() {}

}
