import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModalComponent } from './share-modal.component';

@NgModule({
  declarations: [ShareModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShareModalComponent
  ]
})
export class ShareModalModule { }
