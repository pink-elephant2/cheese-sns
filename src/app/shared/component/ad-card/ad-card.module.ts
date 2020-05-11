import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCardComponent } from './ad-card.component';



@NgModule({
  declarations: [AdCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdCardComponent
  ]
})
export class AdCardModule { }
