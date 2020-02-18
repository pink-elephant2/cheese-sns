import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './twitter.component';



@NgModule({
  declarations: [TwitterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterComponent
  ]
})
export class TwitterModule { }
