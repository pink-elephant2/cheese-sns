import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { PhotoCardModule } from 'shared/component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PhotoCardModule
  ],
  declarations: [TopComponent],
  exports: [TopComponent]
})
export class TopModule { }
