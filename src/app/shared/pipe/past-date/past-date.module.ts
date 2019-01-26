import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastDatePipe } from './past-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PastDatePipe],
  exports: [PastDatePipe]
})
export class PastDateModule { }
