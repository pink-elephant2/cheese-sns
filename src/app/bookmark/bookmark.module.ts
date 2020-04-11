import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'env/environment';
import { BookmarkComponent } from './bookmark.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyAdsenseModule, PhotoCardModule } from 'shared/component';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PhotoCardModule,
    MyAdsenseModule,
    ThemeColorModule
  ],
  providers: [
    environment.bookmarkService,
    environment.photoService
  ]
})
export class BookmarkModule { }
