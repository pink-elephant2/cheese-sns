import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoCardModule, MyAdsenseModule } from 'shared/component';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    PhotoCardModule,
    MyAdsenseModule,
    ThemeColorModule
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule { }
