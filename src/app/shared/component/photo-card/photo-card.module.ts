import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from './photo-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PastDateModule } from 'shared/pipe';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PastDateModule
  ],
  declarations: [PhotoCardComponent],
  exports: [PhotoCardComponent]
})
export class PhotoCardModule { }
