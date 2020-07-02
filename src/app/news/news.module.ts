import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { NewsDetailsPageModule } from '../news-details/news-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    NewsDetailsPageModule
  ],
  declarations: [NewsPage],
  entryComponents: [NewsPage]
})
export class NewsPageModule {}
