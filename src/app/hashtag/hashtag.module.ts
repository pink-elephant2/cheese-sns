import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagComponent } from './hashtag.component';
import { HashtagRoutingModule } from './hashtag-routing.module';



@NgModule({
  declarations: [HashtagComponent],
  imports: [
    CommonModule,
    HashtagRoutingModule
  ]
})
export class HashtagModule { }
