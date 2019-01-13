import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrivacyComponent],
  exports: [PrivacyComponent]
})
export class PrivacyModule { }
