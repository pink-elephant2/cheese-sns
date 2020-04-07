import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment';
import { SearchComponent } from './search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PhotoCardModule, MyAdsenseModule } from 'shared/component';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PhotoCardModule,
    MyAdsenseModule,
    ThemeColorModule
  ],
  providers: [
    environment.photoService
  ]
})
export class SearchModule { }
