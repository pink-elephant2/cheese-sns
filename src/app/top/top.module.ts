import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'env/environment';
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
  providers: [environment.PhotoService],
  exports: [TopComponent]
})
export class TopModule { }
