import { Component, OnInit } from '@angular/core';
import { NewsDetailsPage } from '../news-details/news-details.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsDetails = NewsDetailsPage;
  
  constructor() { }

  ngOnInit() {
  }

  openDetails() {

  }

  openAboutTab() {

  }
}
