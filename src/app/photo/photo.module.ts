import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoCardModule } from 'shared/component';

@NgModule({
  imports: [
    CommonModule,
    PhotoCardModule
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule { }
