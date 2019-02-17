import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'env/environment';
import { TopComponent } from './top.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PhotoCardModule, MyAdsenseModule } from 'shared/component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PhotoCardModule,
    MyAdsenseModule
  ],
  declarations: [TopComponent],
  providers: [environment.PhotoService],
  exports: [TopComponent]
})
export class TopModule { }
