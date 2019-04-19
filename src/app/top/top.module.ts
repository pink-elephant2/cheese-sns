import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { environment } from 'env/environment';
import { TopComponent } from './top.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PhotoCardModule, MyAdsenseModule } from 'shared/component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PhotoCardModule,
    MyAdsenseModule,
    ScrollingModule
  ],
  declarations: [TopComponent],
  providers: [environment.photoService],
  exports: [TopComponent]
})
export class TopModule { }
