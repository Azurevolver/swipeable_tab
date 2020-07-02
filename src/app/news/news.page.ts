import { Component, OnInit } from '@angular/core';
import { NewsDetailsPage } from '../news-details/news-details.page';
import { Router } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsDetails = NewsDetailsPage;
  
  constructor(private router: Router,
              private superTab: SuperTabs
    ) { }

  ngOnInit() {
  }

  openDetails() {
    this.router.navigateByUrl('/news/news-detail');
  }

  openAboutTab() {
    this.superTab.selectTab(2);
  }
}
